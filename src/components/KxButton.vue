<template>
  <div v-wave class="KxButton-Container" @click="handleClick" @keyup.enter="handleClick">

    <div class="kx-button-wrapper">

      <div class="kx-button-text">
        <slot name="text"></slot>
      </div>
      <div class="kx-button-icon">
        <slot name="icon"></slot>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits([ 'click' ])

const handleClick = ref((e) => {

  setTimeout(() => {

    emits('click', e)

  }, 500)

})

</script>

<style lang="scss" scoped>

.kx-button-text {

  display: inline-block;

}

.kx-button-icon {

  position: relative;
  display: inline-block;

  top: 2px;

  font-size: 15px;

  transition: all .25s;
  transform: translateX(3px);

}

.kx-button-wrapper {

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

}

.KxButton-Container {

  position: relative;
  display: inline-block;

  margin: 10px;

  width: 118px;
  height: 32px;

  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  background-color: #0287cf;

  transition: all .25s;
  user-select: none;

  .text {

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

  }

  &:hover {

    cursor: pointer;

    opacity: .95;
    transform: scale(1.1, 1.05);

    .kx-button-icon {

      transform: translateX(8px);

    }

  }

}

</style>
