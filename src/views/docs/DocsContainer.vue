<template>
  <div class="Docs-Container">
    <DocAside :doc="doc" @onSearched="onSearched" class="Docs-nav" />
    <div class="Docs-Main">
      <div class="Doc-Main-Wrapper" ref="docWrapperRef">
        <Doc :previous="previousDoc" :next="nextDoc" :lastModified="doc?.lastModified" :author="doc?.author" :title="doc?.title" :content="doc?.content" />
      </div>
    </div>
    <div v-if="searchDoc?.lastModified" class="searched-data-content-container">
      <Doc :editor-id="`previewVditor`" :lastModified="searchDoc.lastModified" :author="searchDoc.author" :title="searchDoc.title" :content="searchDoc.content" />
    </div>
  </div>
</template>

<script setup>

import DocAside from './../../components/doc/DocAside.vue'
import Doc from './Doc.vue'

import { ref, onMounted, nextTick, watch, onBeforeMount } from 'vue'
import { getCategoryDocs } from '../../plugins/documents'

import { useRoute, useRouter } from 'vue-router'
import { sleep } from '../../plugins/common'

const docType = ref("GermMC")

const route = useRoute()
const router = useRouter()

const searchDoc = ref(null)
const onSearched = ref((doc) => {

  console.log( doc )

  searchDoc.value = doc

})

const doc = ref( null )
const previousDoc = ref(null)
const nextDoc = ref(null)

const docWrapperRef = ref(null)

let paramWatcher

onBeforeMount(() => {

  if( paramWatcher ) paramWatcher()

})

watch(() => doc.value, ( val ) => {

  if( val ) {

    document.title = "GermMC | " + val.title

  }

})

onMounted(() => {

  if( window.localStorage.getItem("doc-type") )
    docType.value = window.localStorage.getItem("doc-type")

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

  const docs = getCategoryDocs( docType.value, params.category )

  const doc = docs[ Number(params.index) ]

  previousDoc.value = params.index <= 0 ? null : { ...docs[ Number(params.index) - 1 ], index: Number(params.index) - 1 }
  nextDoc.value = params.index >= docs.length - 1 ? null : { ...docs[ Number(params.index) + 1 ], index: Number(params.index) + 1 }

  style.transform = ''
  style.opacity = '1'

  animating = false

  return doc

}

</script>

<style lang="scss" scoped>

.searched-data-content-container {
  z-index: 1000;
  position: absolute;

  left: calc(15% + 20px);
  top: 96px;

  height: 75%;
  //min-width: calc(100% + 20px);
  width: 65%;

  background-color: var(--bg-color);
  backdrop-filter: saturate(280%) brightness(120%) blur(30px);
  box-shadow: 2px 2px 16px var(--shadow-color);
  transform: translateX(-10px);
  transition: all .25s;

  //overflow-x: hidden;

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
  height: calc(100% - 10px);

  top: 0;

  overflow: hidden;
  transition: all .25s;
}

.Docs-Container {
  position: relative;
  margin: 0;
  display: flex;
  justify-content: space-around;

  width: 90%;
  height: 100%;

  left: 5%;
  top: 0;

  background-color: var(--bg-color);
  overflow: hidden;

}
</style>

<style>

@media only screen and (max-width: 720px) {

  .Docs-nav {

    transform: translateX(-10px);
    opacity: 0;

  }

  .Docs-Main {

    position: absolute !important;

    left: 0;

    width: 100% !important;

  }

  .Docs-Container {

    display: block;

    left: 0 !important;
    width: 100% !important;

  }

}
</style>
