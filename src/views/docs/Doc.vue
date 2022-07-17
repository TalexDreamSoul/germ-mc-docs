<template>
  <div class="Doc-Container">
    <PerfectScrollbar ref="scrollBarRef" class="Doc-Content" :class="shrink ? 'expand-doc' : ''" :style="editorId !== 'vditor' ? 'width: 100%' : ''">
      <div class="Doc-Title">{{ title }}</div>
        <div class="Doc-doc" ref="docRef"></div>
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
    <div v-if="editorId === 'vditor'" class="Doc-Aside" :class="shrink ? 'aside-shrink' : ''">
      <div class="doc-aside-wrapper doc-aside-top">
        <Logo />
      </div>
      <div class="shrink-btn" @click="shrink = !shrink" :class="shrink ? 'shrink-btn-shrink' : ''"></div>
      <div class="doc-aside-wrapper">
        <p class="doc-aside-title">本章大纲</p>
        <div class="doc-aside-outline-content" ref="docAsideOutlineRef">
          <div class="doc-aside-pointer">

          </div>
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

import Vditor from 'vditor'
import 'vditor/dist/index.css';

import Logo from './../../components/Logo.vue'

import { ref, defineProps, watchEffect, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale("zh-cn")

const shrink = ref(false)

onMounted(() => {

  const val = window.localStorage.getItem("shrink-doc-aside")

  if( val ) shrink.value = val

})

watch(() => shrink.value, (val) => {

  window.localStorage.setItem("shrink-doc-aside", val)

})

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
const modifiedTime = computed(() => moment(props.lastModified * 1000).fromNow())

const openUrl = ref((url) => {

  window.open(url, "_blank")

})

const route = useRoute()
const router = useRouter()
const redirect = ref((doc) => {

  router.push( {
    params: {
      category: doc.category, index: doc.index
    }
  } )

})

const docRef = ref(null)
const docAsideOutlineRef = ref(null)
const scrollBarRef = ref(null)

watchEffect(async () => {

  await Vditor.preview( docRef.value, props.content, {
    markdown: {
      toc: true,
    },
    anchor: 0,
    after() {
      if ( window?.innerWidth <= 768 ) {
        return
      }

      Vditor.outlineRender( docRef.value, docAsideOutlineRef.value )

      scrollBarRef.value.$el.scrollTop = 0

    },
    renderers: {
      renderHeading: ( node, entering ) => {
        const id = Lute.GetHeadingID( node )

        node.onclick = () => {

          // console.log( 'hash' )

          router.push({
            hash: id
          })

        }
        if ( entering ) {
          return [
            `<h${ node.__internal_object__.HeadingLevel } id="${ id }" class="vditor__heading"><span class="prefix"></span><span>`,
            Lute.WalkContinue ]
        } else {
          return [
            `</span><a id="vditorAnchor-${ id }" class="vditor-anchor" href="#${ id }"><svg viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></h${ node.__internal_object__.HeadingLevel }>`,
            Lute.WalkContinue ]
        }
      },
    },

  } )

})

</script>

<style lang="scss">

.Doc-doc {

  color: var(--text-sub-color);

  .hljs-comment {

    opacity: .7;

  }

  .hljs-keyword {

    color: #717cde;

  }

  hr {

    background-color: var(--shadow-color) !important;

  }

  code {

    color: var(--text-sub-color);
    background-color: var(--bg-color);

  }

  a {

    color: rgba(2, 136, 209, 0.7);

  }

  table thead {

    opacity: .7;

  }

  table * {

    border-color: var(--shadow-color) !important;

  }

  table tr {

    background-color: var(--bg-color) !important;

  }

}

.vditor-outline {

  display: block !important;

}

.doc-aside-outline-content {
  position: relative;

  margin: 5px 0;
  padding: 1px 0 5px 0;
  height: auto;

  left: 5%;
  top: 0;

  width: 90%;

  color: var(--text-color);
  font-size: 12px;

  border: none;
  //border-top: 3px solid #0288d1;
  border-radius: 0 0 4px 4px;
  background-color: var(--bg-sub-color);
  cursor: pointer;
  overflow: hidden !important;

  ul {

    position: relative;

    left: -20px;
    margin: 0 !important;

  }

}

blockquote {

  padding: 15px 18px !important;

  border-left: 3px solid #0288d1 !important;
  border-radius: 0 4px 4px 0;
  background-color: var(--shadow-color);

}

.Doc-doc img {

  position: relative;

  background-size: contain;

  max-width: 100%;
  opacity: .85;

}

.vditor-ir__link {
  color: #1c46ea;
  opacity: .75
}
.vditor-wysiwyg pre.vditor-reset[contenteditable="false"] {

  opacity: 1;

  cursor: auto !important;

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

  font-size: 18px;
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
    transform: scaleY(.8);

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
    color: var(--text-color);
    border-radius: 4px;
    background-color: var(--bg-sub-color);
    cursor: pointer;
    overflow: hidden !important;
  }
  position: relative;
  padding: 25px 5px 0 5px;
  user-select: none;
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
  width: 100%;

  left: 0;
  top: 0;

  background-color: var(--bg-color);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);

  border-bottom: 1px solid var(--border-color);

  transform: translate(0, 0);
  user-select: none;
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

      top: 2px;
      left: 0;

      height: 2px;
      width: 5px;

      background-color: #0288d1;
    }
    &:after {
      content: "";
      position: absolute;

      top: 2px;
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
      border: 1px solid var(--bg-sub-color);
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

    color: var(--text-color);
    font-size: 14px;
    &:before {
      content: "";
      position: absolute;

      top: 50%;
      left: -2px;

      width: 4px;
      height: 4px;

      border-top: 2px solid var(--text-color);
      border-left: 2px solid var(--text-color);

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

    color: var(--text-color);
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

      border-top: 2px solid var(--text-color);
      border-right: 2px solid var(--text-color);

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

    color: var(--text-color);
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

    background-color: var(--bg-sub-color);

  }
}
.Doc-Content {
  .Doc-Title {
    z-index: 1000;
    position: sticky;
    padding: 15px 20px;

    height: 31px;
    width: calc(100% + 30px);

    left: 0;
    top: 0;

    background-color: var(--bg-sub-color);
    backdrop-filter: saturate(280%) brightness(120%) blur(30px);

    user-select: none;
    border-bottom: 1px solid var(--border-color);

    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    transform: translate(-35px, -10px);
    transition: all .25s;
    overflow: hidden;

  }
  position: relative;
  padding: v-bind(padding);
  float: left;

  border-top: 1px solid var(--border-color);

  width: 80%;
  height: 100%;

  text-align: left;
  transition: all .25s;

}

.Doc-Aside {
  .shrink-btn {
    z-index: 10000;
    position: sticky;
    top: 0;

    display: inline-block;
    margin-top: 12px;
    margin-left: 20px;

    width: 8px;
    height: 8px;

    float: left;

    border-bottom: 3px solid var(--text-color);
    border-left: 3px solid var(--text-color);
    border-radius: 2px;

    transform: rotate(225deg);
    cursor: pointer;
    user-select: none;
    transition: all .55s;

    &:hover {

      opacity: .7;

    }

    &:after {
      content: "";
      position: absolute;

      left: -18px;
      top: -7px;

      width: 32px;
      height: 32px;

      border-radius: 4px 0 0 4px;

      transform: rotate(45deg);

    }

  }
  .shrink-btn-shrink {

    transform: translateX(-40px) rotate(45deg);

    &:after {

      left: -15px;
      top: -9px;

      background-color: var(--bg-sub-color);
      transform: rotate(45deg);

    }

  }
  position: relative;
  float: right;

  width: 20%;

  border-left: 1px solid var(--border-color);
  //user-select: none;
  transition: all .25s;
}
.aside-shrink {

  width: 0;

  * {

    opacity: 0;

  }

  .shrink-btn-shrink {

    opacity: 1;

    //transform: translateX(-20px);

  }

}

.Doc-Container {
  position: relative;
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 100%;
}

.expand-doc {
  .Doc-Title {
    transform: translate(-35px, 0);
  }

  padding: 0 30px !important;

  left: 0;
  width: 100% !important;

}
</style>

<style>

@media only screen and (max-width: 1280px) {

  .Doc-Aside {

    transform: translateX(10px);
    opacity: 0;

  }

  .Doc-Content {

    position: absolute !important;
    padding: 0 !important;

    left: 2%;
    width: 96% !important;

  }

  .Doc-Container {

    display: block !important;

  }

}

</style>
