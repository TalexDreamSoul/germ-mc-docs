<template>
  <div class="Header-Nav">
    <Logo></Logo>
    <div class="Header-Router">
      <TFSelector router-mode small>

        <TFSelectorItem plain to="/city" title="积木之城"></TFSelectorItem>

        <TFSelectorItem plain to="/workspace" title="工作空间"></TFSelectorItem>

        <TFSelectorItem plain to="/community" title="云端社区"></TFSelectorItem>

        <TFSelectorItem plain to="/tutors" title="入门教程"></TFSelectorItem>

        <TFSelectorItem plain to="/premium_space" title="畅享空间"></TFSelectorItem>

      </TFSelector>
    </div>
    <div class="Header-Personal"></div>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
import TFSelector from './talex/selector/TFSelector.vue'
import TFSelectorItem from './talex/selector/TFSelectorItem.vue'

</script>

<style lang="scss" scoped>
.Header-Nav {

  position: sticky;
  display: flex;
  justify-content: space-around;

  height: 50px;

  background-color: rgba(255, 255, 255, .6);
  saturate(280%) brightness(120%) blur(30px
  border-bottom: 1px solid #212121;

}
</style>
