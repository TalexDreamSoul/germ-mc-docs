<template>
  <PerfectScrollbar class="Docs-nav">
    <div class="Docs-nav-fixed">
      <TFCollapse :default-expand="false" id="type">
        <template #title>
          <div class="Docs-nav-item">文档类型</div>
        </template>
        <template #content>
          <el-cascader :show-all-levels="false" class="Docs-nav-type-cascader"
                  v-model="docType"
                  :options="cascaders"
                  :props="casProps"
          />
        </template>
      </TFCollapse>
      <TFCollapse :default-expand="true" id="search">
        <template #title>
          <div class="Docs-nav-item">搜索文档</div>
        </template>
        <template #content>
          <div class="Docs-nav-searchbar-wrapper">
            <!--          e4e4e4-->
            <input v-model="searchKey" />
          </div>
        </template>
      </TFCollapse>
    </div>
    <div @click="searchKey = ''" class="Docs-nav-item" :class="{ 'nav-item-selected': item.name === doc?.category, 'expanded' : expandedCategories.indexOf(index) !== -1 }" v-for="(item, index) in categories" :key="index">
      <div class="nav-item-title" @click="handleExpanded(index)"><span>{{ item.name }}</span><div class="referrer"></div></div>
      <div class="item-list-wrapper">
        <p v-wave class="Docs-nav-sub-item" :class="{ 'nav-sub-item-selected': subItem.title === doc?.title }" @click="selectDoc(subItem, subIndex)" v-for="(subItem, subIndex) in item.children" :key="subIndex">
          {{ subItem.title }}
        </p>
      </div>
    </div>
  </PerfectScrollbar>
  <div @click="searchKey = ''" class="searched-data-container" v-show="searched">
    <transition-group name="search-list">
      <PerfectScrollbar class="searched-data-list">
        <div @click="selectDoc(searchDoc, searchDoc.index)" v-wave :class="{ 'selected': searchIndex === index }" @mouseenter="searchIndex = index" class="searched-data-box" v-for="(item, index) in searched" :key="index">
          <p class="searched-box-title">{{ item.title }}</p>
        </div>
      </PerfectScrollbar>
    </transition-group>
  </div>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import TFCollapse from './../talex/collapse/TFCollapse.vue'
import { ElCascader, ElMessageBox, ElMessage } from 'element-plus'

import { ref, watch, defineEmits, onMounted, defineProps, watchEffect } from 'vue'
import { getCascaders, getCategories, getCategoryDocs, search } from '../../plugins/documents'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const emits = defineEmits(['onSearched'])
const props = defineProps(['doc'])

const cascaders = ref(getCascaders())
const casProps = {
  expandTrigger: 'hover',
}
const docType = ref("Major,GermMC")
let initialled = false
watch(() => docType.value, (val) => {

  const done = function() {

    window.localStorage.setItem('nav-item-list', "")

    const value = String(val)

    window.localStorage.setItem("doc-type", value)

    categories.value = (() => {

      const docs = []
      const categories = getCategories( value )

      categories.forEach((category, index) => {

        docs.push( { name: category, children: getCategoryDocs( docType.value, category ) } )

      })

      return docs

    })()

    // ElMessage('已切换.')

  }

  if( !initialled ) {

    initialled = done()

  } else

  ElMessageBox.confirm('你确定要切换文档类型吗？切换类型会导致保存的展开数据丢失。')
      .then(() => {

        done()

      })
      .catch(() => {

        ElMessage('已取消.')

      })



})

onMounted(() => {

  emits("onSearched")

  if( window.localStorage.getItem('nav-item-list') )
    expandedCategories.value = JSON.parse(window.localStorage.getItem('nav-item-list'))

  if( window.localStorage.getItem("doc-type") )
    docType.value = window.localStorage.getItem("doc-type")

})

// 列表
const categories = ref( (() => {

  const docs = []
  const categories = getCategories( docType.value )

  categories.forEach((category, index) => {

    docs.push( { name: category, children: getCategoryDocs( docType.value, category ) } )

  })

  return docs

})() )

// 展开逻辑
const expandedCategories = ref([ 0 ])
const handleExpanded = ref((index) => {

  const ind = expandedCategories.value.indexOf(index)

  if( ind === -1 ) expandedCategories.value.push( index )
  else {

    expandedCategories.value.splice(ind, 1)

  }

  window.localStorage.setItem('nav-item-list', JSON.stringify(expandedCategories.value))

})

// 搜索
const searched = ref([])
const searchDoc = ref(null)
const searchKey = ref("")
const searchIndex = ref(-1)
watch(() => searchIndex.value, (ind) => {

  if( !searched.value || searched.value.length - 1 <= ind ) return

  searchDoc.value = searched.value[ind]

})
watch(() => searchKey.value, ( val ) => {

  searched.value = search( docType.value, val )

  searchIndex.value = -1

  searchDoc.value = null

})
watch( () => searchDoc.value, (val) => {
  emits("onSearched", val)
})

// 当doc更新代表切换页面 刷新输入内容
watchEffect(() => {

  searchKey.value = ""

})

const selectDoc = ref((subItem, index) => {

  emits("onSearched")

  router.push( {
    params: {
      category: subItem.category, index
    }
  })

})


</script>

<style lang="scss" scoped>

.Docs-nav-fixed {

  z-index: 1000;
  position: sticky;
  padding: 10px 0 0 0;

  height: auto;
  width: calc(100% + 20px);

  left: 0;
  top: 0;

  background-color: var(--bg-sub-color);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);

  border-bottom: 1px solid var(--border-color);

  transform: translate(-8px, -12px);
  //overflow: hidden;

}
:deep(.Docs-nav-type-cascader) {

  position: relative;

  left: 15%;
  width: 75%;

  color: var(--text-sub-color);
  border-radius: 2px 0 0 2px;
  background-color: var(--bg-color);
  filter: invert(5%);

  .el-input__wrapper {

    .el-input__inner {

      color: var(--text-color) !important;

    }

    background-color: var(--bg-color);
    box-shadow: none !important;

  }

}
.Docs-nav-searchbar-wrapper {
  position: relative;

  width: 70%;
  left: 15%;

  cursor: pointer;

  box-shadow: none !important;

  input {
    position: relative;
    padding: 2px 10px;

    width: 80%;
    height: 28px;

    color: var(--text-sub-color);
    border-radius: 2px 0 0 2px;
    background-color: var(--bg-color);
    filter: invert(5%);
    border: none;
    &:focus {
      outline: none;
    }
  }
  &:after {
    content: "搜索";
    position: absolute;
    padding: 8px 4px 0 4px;

    left: 80%;
    top: 0;

    //min-width: 35px;
    width: 20%;
    height: 24px;

    color: #eee;
    text-align: center;
    border-radius: 0 2px 2px 0;
    background-color: #0288d1;

  }
}

.search-list-move, /* 对移动中的元素应用的过渡 */
.search-list-enter-active,
.search-list-leave-active {
  transition: all 0.5s ease;
}

.search-list-enter-from,
.search-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.search-list-leave-active {
  position: absolute;
}

.searched-data-container {
  .searched-data-list {
    z-index: 100;
    position: relative;

    height: 100%;

    //overflow-x: hidden;

  }
  .searched-data-box {
    .searched-box-title {
      margin: 0;
      padding: 2px 3px;
    }
    position: relative;
    padding: 5px 4px 4px 12px;

    height: 24px;

    text-align: left;
    cursor: pointer;

    &:hover {

      background-color: var(--bg-color);
      backdrop-filter: brightness(600%);
      filter: invert(5%);

    }

    &:before {
      content: "";
      position: absolute;

      left: 1px;
      top: 0;

      width: 4px;
      height: 100%;

      border-radius: 0 2px 2px 0;
      background-color: #0288d1;

      transform: scaleY(0);
      transition: all .25s;
    }

    &:hover:before {

      transform: scaleY(1);

    }

  }
  .selected {

    background-color: var(--bg-color);
    backdrop-filter: brightness(600%);
    filter: invert(5%);

    &:before {

      transform: scaleY(1);

    }

  }
  z-index: 1001;
  padding-top: 8px;
  position: absolute;

  left: 10px;
  top: 194px;

  font-size: 14px;

  //min-height: 100px;
  max-height: 70%;
  //min-width: calc(1% + 10px);

  overflow: hidden;
  user-select: none;
  box-shadow: 2px 2px 16px var(--shadow-color);
  background-color: var(--bg-color);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);
  transform: translateX(-10px);
  transition: all .25s;
}

@keyframes nav-item-loader {
  0% {
    transform: translateX(-5px) rotate(-45deg);
  }
  100% {
    transform: translateX(0) rotate(45deg);
  }
}
@keyframes nav-item-bg-loader {

  0%, 100% {

    transform: scale(.5)

  }

  50% {

    transform: scale(.8);
    opacity: .65;

  }

}
@keyframes nav-sub-item-loader {

  0%, 100% {

    transform: translateX(-3px) rotate(45deg);

  }

  50% {

    transform: translateX(1px) rotate(45deg);

  }

}
.Docs-nav {

  .item-list-wrapper {
    position: relative;

    height: 0;
    overflow: hidden;

    transform: scale(0);

    transition: .25s;
  }
  .referrer {
    position: absolute;
    display: inline-block;
    margin-top: 8px;

    right: 20px;

    width: 5px;
    height: 5px;

    border-bottom: 2px solid var(--text-color);
    border-left: 2px solid var(--text-color);

    transform: rotate(-45deg);
    cursor: pointer;
    transition: all .25s;

  }
  .Docs-nav-item {
    position: relative;
    margin: 0 0 15px 0;

    width: 100%;

    color: var(--text-color);
    font-weight: bold;
    font-size: 13px;
  }
  .nav-item-selected {
    color: var(--text-color);
    font-weight: bolder;
    font-size: 14px;
    //filter: invert(15%);
  }
  .nav-item-selected .nav-item-title::before {
    content: "";
    position: absolute;

    top: 6px;
    left: -13px;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: #0288d1;

    animation: nav-item-loader .5s;
  }
  .nav-item-selected .nav-item-title::after {
    content: "";
    position: absolute;

    top: 0;
    left: -18px;

    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #0288d1;
    opacity: .4;

    animation: nav-item-bg-loader 1.5s infinite;
  }
  .Docs-nav-sub-item {
    position: relative;
    padding: 2px 4px;
    display: flex;
    margin: 4px 8px;

    width: -moz-fit-content;
    width: fit-content;

    color: var(--text-sub-color);
    font-size: 13px;
    font-weight: normal;
    //opacity: .75;
    transition: all .25s;
    &:hover {
      opacity: .95;
      cursor: pointer;
    }
  }
  .nav-sub-item-selected {
    background-color: #0288d1;
    border-radius: 4px;
    //opacity: .7;
    color: #eee;
    //filter: brightness(120%);
  }
  .nav-sub-item-selected::before {
    content: "";
    position: absolute;

    top: 6px;
    left: -14px;

    width: 8px;
    height: 8px;

    border-top: 3px solid #0288d1;
    border-right: 3px solid #0288d1;
    transform: rotate(45deg);
    border-radius: 50%;
    //background-color: #0288d1;

    animation: nav-item-loader .5s, nav-sub-item-loader 1.5s infinite;
  }
  position: relative;
  padding: 2px 8px;

  top: 0;

  min-width: 150px;
  width: 15%;
  height: calc(100% - 10px);

  text-align: left;
  font-size: 13px;

  border-right: 1px solid var(--border-color);
  user-select: none;

  overflow: hidden;
  overflow-x: clip;
  transition: all .25s;

}

.expanded .item-list-wrapper {
  height: auto;
  transform: scale(1);
}
.expanded .referrer {
  transform: rotate(-225deg);
}

</style>

<style lang="scss">

.ps__rail-x {

  display: none !important;

}

.el-cascader__dropdown, .el-popper[role=tooltip], .el-cascader-menu {

  .el-popper__arrow::before {

    background: var(--bg-sub-color) !important;
    backdrop-filter: saturate(280%) brightness(120%) blur(30px);

  }

  .el-cascader-node__label {

    color: var(--text-color) !important;

  }

  .el-cascader-menu {

    --el-cascader-menu-border: var(--bg-color);
    --el-cascader-node-background-hover: var(--bg-sub-color);

    li:hover {

      filter: invert(5%);

    }

  }

  .in-active-path, .el-cascader-menu__list .is-active {

    background-color: var(--bg-sub-color);
    filter: invert(5%);
    transition: background .25s;

    .el-cascader-node__label {

      color: #0288d1 !important;

    }

  }

  background: var(--bg-sub-color) !important;
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);
  border-radius: 5px;

  transition: background .25s;

  --el-cascader-menu-border: rgba(0,0,0,0);

}

</style>
