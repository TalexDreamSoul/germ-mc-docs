<template>

  <div class="TFDialog-Page" :class="visible ? 'show' : 'hide'">

    <p v-if="title">{{ title }}</p>

    <div class="content">

      <slot></slot>

    </div>

  </div>

</template>

<script>
export default {
  name: "TFDialog",
  props: {

    visible: {

      type: Boolean, required: true,

    },

    title: {

      type: String, default: "TalexFluentDialog",

    }

  }
}
</script>

<style lang="scss" scoped>

.TFDialog-Page {

  p {

    position: relative;
    padding: 20px 0;
    display: flex;

    justify-content: center;
    vertical-align: middle;

    top: -20px;
    left: 0;

    width: 100%;
    height: 20%;

    font-size: 20px;
    opacity: .95;

    background-color: var(--hover-opacity-color);
    border-radius: 3px 3px 0 0;
    //border-top: 5px solid #0050b3;

  }

  .content {

    position: absolute;

    top: 90px;
    left: 50%;

    width: 100%;
    height: 100%;

    transform: translate(-50%, 0);

  }

  position: absolute;

  left: 50%;
  top: 50%;

  min-width: 340px;
  min-height: 380px;

  background-color: var(--theme-color);
  box-shadow: 0 0 9px var(--scroll-color);
  border-radius: 3px;

  transform: translate(-50%, -50%);

  transition: all .45s;

}

.show {

  transform: translate(-50%, -50%) scale(1);
  opacity: 1;

}

.hide {

  transform: translate(-50%, -50%) scale(0);
  opacity: 0;

}

</style>
