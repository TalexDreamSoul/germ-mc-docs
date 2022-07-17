<template>

  <div ref="PageRef" class="TFDrawer-Page scrollWrapper" :class="{ 'left-open': left && open, left, right, 'right-open': right && open, }">

    <div class="TFDrawer-Page-Content">

      <h1 class="title" v-if="title">{{ title }}</h1>

      <slot></slot>

    </div>

    <div @click="emit" class="TFDrawer-Page-Overlay"></div>

  </div>

</template>

<script>
export default {
  name: "TFDrawer",
  props: {

    open: {

      type: Boolean,
      required: true,

    },

    title: null,

    left: {

      type: Boolean,
      default: true,

    },
    right: {

      type: Boolean,
      default: false,

    },

  },
  created() {

    this.$nextTick(() => {

      const el = this.$refs.PageRef

      el.parentNode.removeChild(el)

      document.getElementById("app").appendChild(el)

    });

  },
  methods: {

    emit(e) {

      setTimeout(() => {

        this.$emit('close', e)

      }, 250)

    }

  }
}
</script>

<style lang="scss" scoped>

.TFDrawer-Page {

  z-index: 1000;
  position: absolute;

  top: 0;

  width: 100%;
  height: 100%;

  .TFDrawer-Page-Content {

    z-index: 10;
    position: absolute;
    padding: 10px 20px;

    width: 25%;
    height: 100%;

    //color: var(--text-theme-color);

    background-color: var(--theme-opacity-bg-color);
    backdrop-filter: brightness(200%) saturate(150%) blur(20px);

    transition: all .35s;

    .title {

      padding: 3px 8px;

      border-left: 4px solid var(--app-color);

    }

  }

  opacity: 0;

  transition: all .35s;

  .TFDrawer-Page-Overlay {

    z-index: 5;
    position: absolute;

    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0;

    transition: all .35s;

  }

  pointer-events: none;

}

.left {

  .TFDrawer-Page-Content {
    left: -100%;
  }

}

.right {

  .TFDrawer-Page-Content {
    right: 100%;
  }

}

.right-open {

  .TFDrawer-Page-Content {
    right: 0 !important;

  }

  opacity: 1 !important;
  pointer-events: unset !important;

  .TFDrawer-Page-Overlay {

    opacity: .55 !important;

  }

}

.left-open {

  .TFDrawer-Page-Content {

    left: 0 !important;

  }

  opacity: 1 !important;
  pointer-events: unset !important;

  .TFDrawer-Page-Overlay {

    opacity: .55 !important;

  }

}

</style>
