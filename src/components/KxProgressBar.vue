<template>
  <div class="KxProgressBar-Container" :class="{ loading, error, warn, success }">
  </div>
</template>

<script>
export default {
  name: "KxProgressBar",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.error {

  --mentionColor: var(--el-color-error);

  animation: mention 10s forwards;

}

.success {

  --mentionColor: var(--el-color-success);

  animation: mention 10s forwards;

}

@keyframes mention {

  0% {

    height: 5px;

  }

  5%, 95% {

    height: 5px;
    background-color: var(--mentionColor);

  }

  100% {

    height: 3px;
    background-color: var(--mentionColor);

  }

}

.loading {

  animation: loadingFrame 1.25s infinite linear;

}

.warn {

  --mentionColor: var(--el-color-warning);

  animation: mention 10s forwards;

}

// Google progress bar loading animation
@keyframes loadingFrame {

  0% {

    left: 0;
    width: 0;

  }

  20% {

    left: 0;
    width: 50%;

  }

  40% {

    left: 25%;
    width: 75%;

  }

  60% {

    left: 50%;
    width: 100%;

  }

  80% {

    left: 75%;
    width: 25%;

  }

  100% {

    left: 100%;
    width: 0;

  }

}

.KxProgressBar-Container {

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;

  height: 3px;

  background-color: var(--el-color-primary);

}

</style>
