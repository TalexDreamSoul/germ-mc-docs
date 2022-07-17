<template>
  <div class="TFCollapse-Container" :style="height ? `height: ${height}px` : ''" :class="{ 'expanded-collapse': expand }" ref="collapseContentRef">

    <div class="TFCollapse-title" @click="expand = !expand">
      <slot name="title"></slot>
    </div>

    <div class="TFCollapse-content">
      <slot name="content"></slot>
    </div>

  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from 'vue'

const height = ref(null)
let h;
const collapseContentRef = ref(null)
const props = defineProps(["id", "defaultExpand"])
const expand = ref(true)

onMounted(() => {

  expand.value = props.defaultExpand

  const val = window.localStorage.getItem("nav-fixed-collapse-" + props.id)

  if( val !== undefined && val !== null )
    expand.value = val === "true"

  h = height.value = collapseContentRef.value.clientHeight

})

watch(() => expand.value, ( val ) => {

  if( val ) {

    height.value = h

  } else {

    height.value = 10

  }

  window.localStorage.setItem("nav-fixed-collapse-" + props.id, val ? "true" : "false")

})

</script>

<style lang="scss" scoped>

.TFCollapse-Container {

  position: relative;
  padding: 5px;
  margin: 0 0 10px 0;

  height: auto;

  border-top: 1px solid var(--border-color);

  transition: all .25s;
  overflow: hidden;

  .TFCollapse-content {

    transition: all .25s;

  }

}

.TFCollapse-title {

  position: relative;
  padding: 0 5px;

  cursor: pointer;
  transition: all .25s;

  &:hover {
    opacity: .75;
  }

  &:after {
    content: "";
    position: absolute;

    left: calc(100% - 25px);
    top: 7px;

    width: 5px;
    height: 5px;

    border-bottom: 2px solid var(--text-color);
    border-left: 2px solid var(--text-color);

    transform: rotate(-225deg);
    cursor: pointer;
    transition: all .25s;

  }

}

.expanded-collapse {

  .TFCollapse-title {

    &:after {

      top: 3px;

      transform: rotate(-45deg);

    }

  }

}

</style>
