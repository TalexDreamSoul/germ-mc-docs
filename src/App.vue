<template>
  <teleport to="body">
    <div class="header-tip">
      <span class="header-tip-content">你所访问的是 <span class="beta-version">Beta</span> 版本的文档，在<span class="url-clicker" @click="openUrl('https://wiki.germmc.com/')">这里</span>浏览原文档。有任何问题？<span class="url-clicker" @click="openUrl('https://docs.qq.com/form/page/DVEpNS2FVdUpGaVlt')">点这里</span></span>
    </div>
  </teleport>

  <el-container>
    <el-header class="app-header">
      <div @click="$router.replace({ path: '/' })" class="app-header-left">
        <Logo />
      </div>
      <div class="app-header-right">
        <TFSelector router-mode>
          <TFSelectorItem plain to="/docs" title="文档"></TFSelectorItem>

          <TFSelectorItem plain to="/api" title="API"></TFSelectorItem>

          <TFSelectorItem plain to="/forum" title="论坛"></TFSelectorItem>

          <TFSelectorItem plain to="/buy" title="后台"></TFSelectorItem>

          <TFSelectorItem plain to="/about" title="关于"></TFSelectorItem>
        </TFSelector>
        <div class="header-func">
          <ModeSelector @mode-change="selectMode" />
        </div>
      </div>
    </el-header>
    <el-main class="app-main">
      <router-view></router-view>
    </el-main>
    <!--      <el-footer class="app-footer">-->
    <!--        <Footer />-->
    <!--      </el-footer>-->
  </el-container>
</template>

<script setup>
import Logo from './components/Logo.vue'
import ModeSelector from './components/ModeSelector.vue'
import TFSelector from './components/talex/selector/TFSelector.vue'
import TFSelectorItem from './components/talex/selector/TFSelectorItem.vue'
import { ref } from 'vue'

const selectMode = ref((mode) => {

  // console.log( "select: " + mode )

  if( mode ) {

    document.body.className += " dark-mode"

  } else {

    document.body.className = document.body.className.replace(" dark-mode", "").replace("dark-mode", "")

  }

})

const openUrl = ref((url) => {

  window.open(url, "_blank");

})

</script>

<style lang="scss">

.header-tip {

  z-index: 10000;
  position: fixed;
  padding: 5px 0 0 0;

  top: 0;

  height: 25px;

  width: 100%;

  color: #fff;
  font-size: 13px;

  background-color: #0288d1;
  user-select: none;

  //text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

}

.app-main {
  position: absolute;

  padding: 0 !important;

  top: 60px;

  width: 100%;
  height: calc(100% - 60px);

}

.app-header {
  .header-func {
    position: relative;
    display: inline-block;
  }
  .app-header-left {
    cursor: pointer;
  }
  .app-header-right {
    position: relative;

    top: -12px;

  }
  z-index: 1000;
  position: sticky;
  position: -webkit-sticky;

  display: flex;
  justify-content: space-around;


  --el-header-padding: 15px 50px 5px 50px !important;

  color: var(--text-color);
  background-color: var(--bg-color);
  border-bottom: 1px solid #212121;

  backdrop-filter: saturate(280%) brightness(120%) blur(30px);

}

#app {

  position: absolute;

  top: 30px;

  width: 100%;
  height: calc(100% - 30px);

  text-align: center;

}

//#app {
//
//
//
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//
//  overflow: hidden;
//
//}

.header-tip .header-tip-content {
  position: relative;

}

@media only screen and (max-width: 520px) {

  .header-tip .header-tip-content {

    width: 200px;

    animation: topMoving 15.25s linear infinite;

  }

  header {

    padding: 0 !important;

    width: 100% !important;

  }

  .app-header-left {

    width: 100%;

  }

  .app-header-right {

    display: none !important;

  }

}

@keyframes topMoving {

  0% {

    left: 150%;
    //opacity: 0.5;

  }

  //40%, 60% {

    /*left: 0;*/
    /*opacity: 1;*/

  //}

  100% {

    left: -150%;
    //opacity: 0.5;

  }

}

</style>
