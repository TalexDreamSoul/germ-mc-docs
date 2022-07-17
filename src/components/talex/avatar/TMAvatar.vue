<template>

  <div v-wave class="TMAvatar-Page" :class="{ editable }"
       :style="clickable ? 'cursor: pointer' : 'pointer-events: none'"
       @click="clickable && $emit('click',$event)">

    <div class="edit" v-if="editable">

      <i class="el-icon-edit"></i>

    </div>

    <div v-if="img" class="img" :style="`background-image: ${img}`" />

    <div class="slot" v-else>

      <slot></slot>

    </div>

  </div>

</template>

<script>
export default {
  name: "TMAvatar",
  props: {

    img: {

      type: String, default: null

    },

    clickable: {

      type: Boolean, default: false

    },

    editable: {

      type: Boolean, default: false

    }

  }
}
</script>

<style lang="scss" scoped>

.TMAvatar-Page {

  position: relative;
  display: inline-block;
  padding: 2px;

  width: 36px;
  height: 36px;

  background-color: var(--hover-opacity-color);
  box-shadow: 1px 1px 4px var(--hover-opacity-color);

  border: 2px solid #8e7f7a;
  border-radius: 3px;
  transition: all .35s;

  .img {

    width: 100%;
    height: 100%;

    //background-image: url('./../../../assets/default_avatar.jpg');
    background-repeat: no-repeat;
    background-size: cover;

  }

  .slot {

    position: relative;
    top: 5px;

    font-size: 1vw;

  }

}

.editable {

  border-color: var(--text-normal-color);
  border-width: 1px;

  .edit {

    z-index: 100;
    position: absolute;

    right: -10px;
    top: -10px;

    width: 24px;
    height: 24px;

    background-color: var(--hover-color);
    border: 2px solid var(--theme-opacity-color);
    border-radius: 50%;

    i {

      position: absolute;

      left: 5px;
      top: 5px;

      font-size: .5vw;

    }

  }

}

</style>
