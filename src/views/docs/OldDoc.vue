<template>
  <div class="Doc-Container">
    <PerfectScrollbar @ps-scroll-y="scrollHandle" ref="mainScrollbar" class="Doc-Content" :style="editorId !== 'vditor' ? 'width: 100%' : ''">
      <div class="Doc-Title">{{ title }}</div>
        <div class="Doc-doc" ref="docRef" :id="editorId"></div>
      <div class="Doc-Footer">
        <p>最后修改: <span>{{ modifiedTime }}</span></p>
        <p>
          <span @click="redirect(previous)" class="footer-btn footer-previous" v-if="previous">{{ previous.title }}</span>
          <span @click="redirect(next)" class="footer-btn footer-next" v-if="next">{{ next.title }}</span>
        </p>
        <div class="editor">
          <p class="editor-title">参与编辑</p>
          <div class="author" v-for="(item, index) in author" :key="index">
            <el-tooltip :content="item.name">
              <img :alt="item.qq" :src="`http://q1.qlogo.cn/g?b=qq&nk=${item.qq}&s=640`" />
            </el-tooltip>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
    <div v-if="editorId === 'vditor'" class="Doc-Aside" ref="docAsideRef">
      <div class="doc-aside-wrapper doc-aside-top">
        <Logo />
      </div>
      <div class="doc-aside-sticky-content">
        <div class="doc-aside-pointer" ref="asidePointerRef">

        </div>
      </div>
      <div class="doc-aside-wrapper">
        <p class="doc-aside-title">金牌赞助</p>
        <div class="doc-aside-box">
          虚位以待
        </div>
      </div>
      <div class="doc-aside-wrapper">
        <p class="doc-aside-title">萌芽生态</p>
        <div class="doc-aside-box engine-forum" @click="openUrl('http://forum.germmc.com/')">
          <div></div>
        </div>
        <div class="doc-aside-box engine-editor" @click="openUrl('http://editor.germmc.com/')">
          <span>GermEngine Editor</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import Vditor from 'vditor';
import 'vditor/dist/index.css';

import Logo from './../../components/Logo.vue'

import Moment from 'moment'
import { ref, defineProps, onMounted, watch, computed, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { sleep } from '../../plugins/common'
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';

Moment.locale("zh-cn")

const vditor = ref(null);
const docAsideRef = ref(null);
const padding = ref("10px 35px");
const props = defineProps({
  content: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  author: {
    type: Array,
    require: true
  },
  lastModified: {
    type: Number,
    require: true
  },
  next: {
    type: Object,
    require: false,
  },
  previous: {
    type: Object,
    require: false,
  },
  editorId: {
    type: String,
    default: "vditor"
  }
})
const modifiedTime = computed(() => Moment(props.lastModified * 1000).locale('zh-cn').fromNow())

const openUrl = ref((url) => {

  window.open(url, "_blank")

})

// console.log( await Vditor.md2html(props.content) )

const route = useRoute()
const router = useRouter()
const redirect = ref((doc) => {

  router.push( {
    query: {
      category: doc.category, index: doc.index
    }
  } )

})

const asidePointerRef = ref(null)

// ref是vue的 dom是自己搞的
const asideContentDom = ref(null)

// Aside 滚动处理
const scrollHandle = ref((event) => {

  const path0 = event.path[0]

  const topDis = path0.scrollTop

  const parentNode = path0.childNodes[1].childNodes[1].childNodes[0].childNodes[0]

  let height = 0, el = null, min = 1000000 // 没人有 100w px 的屏幕或者文档吧...

  parentNode.childNodes.forEach((child) => {

    height += child.clientHeight

    // 不是 h 不配
    if( child.nodeName.indexOf("H") === -1 || child.nodeName === 'HR' ) {return}

    // console.log( el, min, topDis - height, height, topDis)

    if( Math.abs(topDis - height) < min ) {

      // exchange
      el = child
      min = topDis - height

    }

  })

  // 接下来去概览找
  let dom = null

  asideContentDom?.value?.childNodes[2]?.childNodes[0]?.childNodes?.forEach((child) => {

    if( dom ) return

    if( el.id.indexOf(child.innerText) !== -1 ) dom = child

  })

  if( !dom ) return

  // console.log( dom )

  // 计算一下胜利者的 top
  let top = dom.offsetTop, cnt = 0, domHeight = dom.clientHeight

  // while( dom ) {
  //
  //   if( cnt >= 3 ) break;
  //
  //   if( dom.offsetTop )
  //     top += dom.offsetTop
  //
  //   dom = dom.parentNode
  //   ++cnt;
  //
  // }

  // console.log( top )

  const style = asidePointerRef.value.style

  style.opacity = '1'
  style.transform = `translateY(${top}px`
  style.height = domHeight + 'px'

  // console.log( 'winner', el )

})

async function refreshHashTop() {

  const vditor = document.getElementById("vditor")

  if( !vditor ) return

  await sleep(2000)

  let hash = route.query.hash

  if( !hash ) return

  hash = hash.substring(1, hash.length)
  const el = document.getElementById( hash )

  // console.dir( el )

  if( !el ) {

    console.error( 'Cannot get element by id ' + hash )

    return

  }

  el.scrollIntoView(true)
  vditor.scrollIntoView()

  // vditor.style.transition = 'transform .25s'
  // vditor.style.transform = 'translateY(-' + el.offsetTop + 'px)'

}

// Aside 点击处理
function findIdEleHTag( sourceEl, event, id ) {

  const path8 = event.path[8]

  // console.dir( path8 )

  const parentNode = path8.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0]

  let topDis = 0

  parentNode.childNodes.forEach(async (child) => {

    topDis += child.clientHeight

    if( child.nodeName.indexOf("H") === -1 || child.nodeName === 'HR' ) {return}

    if( child.id.indexOf( id ) !== -1 ) {

      const style = asidePointerRef.value.style

      style.opacity = '1'
      style.transform = `translateY(${sourceEl.offsetTop}px`
      style.height = sourceEl.clientHeight + 'px'

      await router.push({
        query: {
          category: route.query.category,
          index: route.query.index,
          hash: "#" + child.id
        }
      })

      await sleep(3000)

      await refreshHashTop()

      await sleep(3000)

      path8.scrollTop = topDis

    }

  })

}

watch(() => route.query, () => refreshHashTop())

const mainScrollbar = ref(null)
onMounted(() => {

  nextTick(async () => {

    await refreshHashTop()

    await sleep(1000)

    document.querySelector(".vditor-outline__content")?.childNodes[0]?.childNodes?.forEach((child) => {

      child.onclick = (event) => {

        findIdEleHTag( child, event, child.innerText )

      }

    })

  })

  let outline = {}
  if( props.editorId === 'vditor' ) {

    outline = {
      "enable": true,
          "position": "right"
    }

  }

  vditor.value = new Vditor(props.editorId, {
    "mode": "wysiwyg",
    preview: {
      anchor: "1",
      delay: 0,
      hljs: {
        enable: true,
        // style: 'monokai',
        lineNumber: true
      }
    },
    outline,
    counter: {
      enable: true,
      type: 'markdown'
    },
    placeholder: "正在施工中...,",
    async after() {

      vditor.value.setValue( props.content )
      vditor.value.disabled()

      // console.log( vditor.value )

      if( props.editorId === 'vditor' ) {

        const el = document.querySelector(".vditor-outline");

        asideContentDom.value = el

        el.parentNode.removeChild( el )

        docAsideRef.value.childNodes[1].appendChild( el )

        // docAsideRef.value.childNodes[1].onclick = contentClicker

        // console.log( docAsideRef.value.parentNode )

        el.firstChild.innerHTML = "本篇概览"

        watch(() => props.content, () => {

          vditor.value.setValue( props.content )

        })

        setTimeout(() => {

          const parentSetter = document.querySelector(".vditor-ir");

          const reset = parentSetter.querySelector(".vditor-reset");

          if( !reset ) return

          window.onresize = () => {

            padding.value = reset.style.padding

          }

        }, 100)

      }

      // 高亮显示
      document.querySelectorAll("pre code")?.forEach((node) => {

        // console.log( 'for', node )

        hljs.highlightElement( node );

      })

    }
  });

})

</script>

<style lang="scss">

.vditor-ir__link {
  color: #1c46ea;
  opacity: .75
}
.vditor-wysiwyg pre.vditor-reset[contenteditable="false"] {

  opacity: 1;

  cursor: auto !important;

}
.vditor-outline {
  position: relative;
  padding: 25px 5px 0 5px;

  height: auto;
  width: 100%;

  font-size: 12px;
  .vditor-outline__title {
    text-align: left;

    font-size: 15px;
    font-weight: bold;
  }
}

.vditor-reset h1 {

  text-align: center !important;

}
.vditor-reset h2 {
  border-bottom: none !important;
}
.vditor-toolbar {

  display: none;

}
.vditor {
  border: none;
}
</style>

<style lang="scss" scoped>
.engine-editor span {

  font-weight: bold;

  background: linear-gradient(to right bottom, #7a3684, #654c7f, #26e7e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.doc-aside-pointer {
  position: absolute;

  top: 96px;

  width: 3px;
  height: 10px;

  border-radius: 0 3px 3px 0;
  background-color: #0288d1;
  box-shadow: 1px 0 2px 1px #0288d1;

  opacity: 0;
  transition: all .25s;

}

.engine-forum {

  div {

    position: absolute;

    left: 0;
    top: 0;

    height: 100%;
    width: 100%;

    background: url("http://forum.germmc.com/data/assets/logo/logo.png") !important;
    background-repeat: no-repeat !important;
    background-position: center 10px !important;

    filter: drop-shadow(0 0 1px #1c46ea);

  }

}

.doc-aside-wrapper {
  .doc-aside-title {
    padding: 5px 10px;
    margin-bottom: 0;

    text-align: left;

    font-size: 15px;
    font-weight: bold;
  }
  .doc-aside-box {
    position: relative;
    margin: 5px 0;
    padding: 15px 0 5px 0;
    height: 30px !important;
    left: 5%;
    width: 90%;
    color: #d1d1d1;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
    overflow: hidden !important;
  }
  position: relative;
  padding: 25px 5px 0 5px;

}
.doc-aside-top {
  .Logo-Container {
    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  z-index: 1000;
  position: sticky;
  padding: 0 10px;

  height: 95px;
  width: calc(100% + 20px);

  left: 0;
  top: 0;

  background-color: var(--bgColor);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);

  border-bottom: 1px solid var(--border-color);

  user-select: none;
  transform: translate(-10px, -2px);
  overflow: hidden;

}

.editor {
  position: relative;

  top: 20px;
  .editor-title {
    position: relative;
    padding: 2px;

    font-weight: bold;

    &:before {
      content: "";
      position: absolute;

      top: 4px;
      left: 0;

      height: 2px;
      width: 5px;

      background-color: #0288d1;
    }
    &:after {
      content: "";
      position: absolute;

      top: 4px;
      left: 0;

      height: 5px;
      width: 2px;

      background-color: #0288d1;
    }
  }
  .author {
    position: relative;
    margin: -10px 5px;
    display: inline-block;
    img {
      width: 32px;

      border-radius: 3px / 2px;
      border: 1px solid #262626;
    }
  }
}
.Doc-Footer {
  user-select: none;
  .footer-btn {
    transition: all .25s;
  }
  .footer-btn:hover {
    color: #0288d1;

    cursor: pointer;
  }
  .footer-previous {
    position: relative;

    left: 10px;

    color: rgba(60, 60, 60, .7);
    font-size: 14px;
    &:before {
      content: "";
      position: absolute;

      top: 50%;
      left: -2px;

      width: 4px;
      height: 4px;

      border-top: 2px solid rgba(60, 60, 60, .7);
      border-left: 2px solid rgba(60, 60, 60, .7);

      opacity: .7;

      transform: rotate(-45deg) translateY(-50%) translateY(-1px);
      transition: all .25s;
    }
    &:hover:before {

      border-top: 2px solid rgba(2, 136, 209, 0.7);
      border-left: 2px solid rgba(2, 136, 209, 0.7);

      transform: translateX(-3px) rotate(-45deg) translateY(-50%) translateY(-1px);

    }
  }
  .footer-next {
    position: relative;

    color: rgba(60, 60, 60, .7);
    font-size: 14px;

    right: 5px;

    float: right;

    &:before {
      content: "";
      position: absolute;

      top: 50%;
      right: -3px;

      width: 4px;
      height: 4px;

      border-top: 2px solid rgba(60, 60, 60, .7);
      border-right: 2px solid rgba(60, 60, 60, .7);

      opacity: .7;

      transform: rotate(45deg) translateY(-50%) translateY(-1px);
      transition: all .25s;
    }
    &:hover:before {

      border-top: 2px solid rgba(2, 136, 209, 0.7);
      border-right: 2px solid rgba(2, 136, 209, 0.7);

      transform: translateX(3px) rotate(45deg) translateY(-50%) translateY(-1px);

    }
  }
  p {
    font-size: 14px;

    color: #8a8a8a;
    opacity: .7;
  }
  position: relative;
  padding: v-bind(padding);
  margin: 40px 0 80px 0;

  height: 180px;

  overflow: hidden;
  &:before {
    content: "";
    position: absolute;

    width: 100%;
    height: 1px;

    background-color: #e7e7e7;

  }
}
.Doc-Content {
  .Doc-Title {
    z-index: 1000;
    position: sticky;
    padding: 30px 20px 0 20px;

    height: 65px;
    width: calc(100% + 20px);

    left: 0;
    top: 0;

    background-color: var(--bgColor);
    backdrop-filter: saturate(280%) brightness(120%) blur(30px);

    user-select: none;
    border-bottom: 1px solid var(--border-color);

    font-size: 25px;
    font-weight: bolder;
    text-align: center;
    transform: translate(0, -2px);
    overflow: hidden;

  }
  position: relative;
  float: left;

  width: 80%;
  height: 100%;

  text-align: left;

}
.Doc-Aside {
  position: relative;
  float: right;

  width: 20%;

  border-left: 1px solid var(--border-color);
  user-select: none;
}

.Doc-Container {
  position: relative;
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 100%;
}
</style>
