<template>
  <div class="Docs-Container">
    <PerfectScrollbar class="Docs-nav">
      <div class="Docs-nav-fixed">
        <div class="Docs-nav-item">搜索</div>
        <div class="Docs-nav-searchbar-wrapper">
<!--          e4e4e4-->
          <input v-model="searchKey" />
        </div>
      </div>
      <div @click="searchKey = ''" class="Docs-nav-item" :class="{ 'nav-item-selected': item.name === doc.category }" v-for="(item, index) in categories" :key="index">
        {{ item.name }}
        <p v-wave class="Docs-nav-sub-item" :class="{ 'nav-sub-item-selected': subItem.title === doc.title }" @click="selectDoc(subItem, subIndex)" v-for="(subItem, subIndex) in item.children" :key="subIndex">
          {{ subItem.title }}
        </p>
      </div>
    </PerfectScrollbar>
    <div class="Docs-Main" @click="searchKey = ''">
      <div class="Doc-Main-Wrapper" ref="docWrapperRef">
        <Doc :previous="previousDoc" :next="nextDoc" :lastModified="doc.lastModified" :author="doc.author" :title="doc.title" :content="doc.content" />
      </div>
    </div>
    <div class="searched-data-container" v-show="searched">
      <transition-group name="search-list">
        <PerfectScrollbar class="searched-data-list">
          <div @click="selectDoc(searchDoc, searchDoc.index)" v-wave :class="{ 'selected': searchIndex === index }" @mouseenter="searchIndex = index" class="searched-data-box" v-for="(item, index) in searched" :key="index">
            <p class="searched-box-title">{{ item.title }}</p>
          </div>
        </PerfectScrollbar>
      </transition-group>
    </div>
    <div v-if="searchDoc?.lastModified" class="searched-data-content-container">
      <Doc :editor-id="`previewVditor`" :lastModified="searchDoc.lastModified" :author="searchDoc.author" :title="searchDoc.title" :content="searchDoc.content" />
    </div>
  </div>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import Doc from './Doc.vue'

import { ref, onMounted, nextTick, watch, onBeforeMount } from 'vue'
import { getCategories, getCategoryDocs, search } from '../../plugins/documents'

import { useRoute, useRouter } from 'vue-router'
import { sleep } from '../../plugins/common'

const route = useRoute()
const router = useRouter()

const searched = ref([])
const searchKey = ref("")
const searchDoc = ref(null)
const searchIndex = ref(-1)
watch(() => searchIndex.value, (ind) => {

  if( !searched.value || searched.value.length - 1 <= ind ) return

  searchDoc.value = searched.value[ind]

})
watch(() => searchKey.value, ( val ) => {

  searched.value = search( val )

  searchIndex.value = -1
  searchDoc.value = null

})

const selectDoc = ref((subItem, index) => {

  router.push( {
    params: {
      category: subItem.category, index
    }
  })

})

const categories = ref( (() => {

  const docs = []
  const categories = getCategories()

  categories.forEach((category, index) => {

    docs.push( { name: category, children: getCategoryDocs( category ) } )

  })

  return docs

})() )

const doc = ref( "" )
const previousDoc = ref(null)
const nextDoc = ref(null)

const docWrapperRef = ref(null)

let paramWatcher

onBeforeMount(() => {

  if( paramWatcher ) paramWatcher()

})

watch(() => doc.value, ( val ) => {

  if( val ) {

    searchKey.value = ''

    document.title = "GermMC | " + val.title

  }

})

onMounted(() => {

  nextTick(async () => {

    const params = route.params

    paramWatcher = watch(() => route.params, async ( val) => {

      if( !val.index ) {

        return router.push({
          params: {
            category: "序言",
            index: 0,
          }
        })

      }

      doc.value = await fetchDate( val )

    })

    doc.value = await fetchDate( params )

  })

})

let animating = false

async function fetchDate ( params ) {

  if( animating ) return

  animating = true

  const style = docWrapperRef?.value?.style

  if( !params || !style ) return

  style.transform = 'translateX(-5px) scale(0.95)'
  style.opacity = '0'

  await sleep(100)

  style.transform = 'translateX(5px) scale(0.95)'

  await sleep(100)

  const docs = getCategoryDocs( params.category )

  const doc = docs[ Number(params.index) ]

  previousDoc.value = params.index <= 0 ? null : { ...docs[ Number(params.index) - 1 ], index: Number(params.index) - 1 }
  nextDoc.value = params.index >= docs.length - 1 ? null : { ...docs[ Number(params.index) + 1 ], index: Number(params.index) + 1 }

  style.transform = ''
  style.opacity = '1'

  animating = false

  return doc

}

</script>

<style>
.ps__thumb-y {
  transition: all .25s;
}
.ps__thumb-x {
  display: none;
}
</style>

<style lang="scss" scoped>
.searched-data-content-container {
  z-index: 1000;
  position: absolute;

  left: calc(15% + 20px);
  top: 94px;

  height: 75%;
  //min-width: calc(100% + 20px);
  width: 65%;

  background-color: var(--bgColor);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);
  box-shadow: 2px 2px 16px #eee;
  transform: translateX(-10px);
  transition: all .25s;

  overflow: hidden;

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

    max-height: 50%;

    overflow: hidden;

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

      background-color: var(--bgColor);
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

    background-color: var(--bgColor);
    backdrop-filter: brightness(600%);
    filter: invert(5%);

    &:before {

      transform: scaleY(1);

    }

  }
  z-index: 1001;
  position: absolute;

  left: 10px;
  top: 94px;

  font-size: 14px;

  //min-height: 100px;
  height: auto;
  min-width: calc(15% + 10px);

  user-select: none;
  box-shadow: 2px 2px 16px #eee;
  background-color: var(--bgColor);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);
  transform: translateX(-10px);
  transition: all .25s;
}

.Doc-Main-Wrapper {
  position: relative;

  width: 100%;
  height: 100%;

  transition: all .1s;
}
.Docs-Main {
  position: relative;
  //display: inline-block;

  width: 85%;
  //max-height: calc(80% - 5px);
  height: calc(100% - 4px);

  top: 0;

  overflow: hidden;
}
@keyframes nav-item-loader {
  0% {
    transform: translateX(-5px) rotate(-45deg);
  }
  100% {
    transform: translateX(0) rotate(45deg);
  }
}
.Docs-nav {
  .Docs-nav-fixed {
    .Docs-nav-item {
      position: relative;

      left: 15px;
      top: 5px;

    }
    .Docs-nav-searchbar-wrapper {
      position: relative;

      width: 70%;
      left: 15%;

      cursor: pointer;

      input {
        position: relative;
        padding: 2px 10px;

        width: 80%;
        height: 28px;

        border-radius: 2px 0 0 2px;
        background-color: #e4e4e4;
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

        width: 20%;
        height: 24px;

        color: #fff;
        text-align: center;
        border-radius: 0 2px 2px 0;
        background-color: #0288d1;

      }
    }
    z-index: 1000;
    position: sticky;
    padding: 10px 0;

    height: 75px;
    width: calc(100% + 20px);

    left: 0;
    top: 0;

    background-color: var(--bgColor);
    backdrop-filter: saturate(280%) brightness(120%) blur(30px);

    border-bottom: 1px solid var(--border-color);

    transform: translate(-10px, -2px);
    //overflow: hidden;

  }
  user-select: none;
  .Docs-nav-item {
    position: relative;
    margin: 0 0 15px 0;

    width: -moz-fit-content;
    width: fit-content;

    color: #212121;
    font-weight: bold;
    font-size: 13px;
  }
  .referrer {
    position: relative;

    left: 5px;

    width: 5px;
    height: 5px;

    background-color: #0288d1;
  }
  .expanded {

  }
  .nav-item-selected {
    color: #000;
    font-weight: bolder;
    font-size: 14px;
  }
  .nav-item-selected::before {
    content: "";
    position: absolute;

    top: 5px;
    left: -12px;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: #0288d1;

    animation: nav-item-loader .5s;
  }
  .Docs-nav-sub-item {
    position: relative;
    padding: 2px 4px;
    display: flex;
    margin: 6px 5px;

    width: -moz-fit-content;
    width: fit-content;

    font-size: 12px;
    font-weight: normal;
    opacity: .75;
    transition: all .25s;
    &:hover {
      opacity: .95;
      cursor: pointer;
    }
  }
  .nav-sub-item-selected {
    background-color: #0288d1;
    border-radius: 4px;
    opacity: .7;
    color: #eee;
  }
  .nav-sub-item-selected::before {
    content: "";
    position: absolute;

    top: 5px;
    left: -14px;

    width: 6px;
    height: 6px;

    border-top: 5px solid #0288d1;
    border-right: 5px solid #0288d1;
    transform: rotate(45deg);
    border-radius: 50%;
    //background-color: #0288d1;

    animation: nav-item-loader .5s;
  }
  position: relative;
  padding: 2px 8px;

  top: -2px;

  width: 15%;
  height: calc(100% - 1px);

  text-align: left;
  font-size: 13px;

  border-right: 1px solid var(--border-color);

  overflow: hidden;
  overflow-x: clip;

}

.Docs-Container {
  position: relative;
  display: flex;
  justify-content: space-around;

  width: 80%;
  height: 100%;

  left: 10%;
  top: 2px;

}
</style>
