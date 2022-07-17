<template>

  <div v-wave class="TFSelectorItemPage" :data-to="to" :class="{ selected, plain, 'plain-selected': selected && plain }" ref="TFSelectorItemRef">

    <div :class="{ 'text-center': textCenter, 'icon-fixed': iconFixed }">

      <slot name="icon">
        <span class="label">{{ title }}</span>
      </slot>

    </div>

  </div>

</template>

<script>

export default {
  name: "TFSelectorItem",

  props: {

    title: '',
    to: '',
    textCenter: {

      type: Boolean,
      default: false,

    },
    plain: {

      type: Boolean,
      default: false,

    },
    iconFixed: {

      type: Boolean,
      default: false,

    }

  },
  data() {

    return {

      selected: false

    }

  },

  methods: {

    getTo() {

      return this.to

    },

    refreshSelect(select) {

      this.selected = select

    }

  }
}
</script>

<style lang="scss" scoped>

.TFSelectorItemPage {

  position: relative;
  display: inline-block;

  left: 0;

  margin: 10px 5px;
  padding: 8px 12px;

  border-radius: 3px;

  //color: var(--text-normal-color);
  cursor: pointer;

  transition: all .15s;

  .label {

    position: relative;

    top: 0;

    text-align: center;
    font-size: 15px;

    user-select: none;

    transition: all .15s;

  }

  i {

    font-size: 22px;
    margin: 0 5px;

    transition: all .15s;

  }

  &:hover {

    i, .label { filter: invert(100%) }

    background-color: var(--color-input-bg);

    opacity: .9;

  }

}

.vertical {

  padding: 8px 10px;

  display: block;

}

.selected {

  i, .label { filter: invert(100%) }

  background-color: var(--color-input-bg);

  opacity: 0.8;

  &:hover {

    opacity: 1;

  }

}

.text-center {

  position: relative;
  display: flex;

  justify-content: center;
  vertical-align: middle;

}

.icon-fixed {

  i {

    position: absolute;

    left: 0;

  }

}

.plain {

  &:hover {

    i, .label { opacity: .75; filter: invert(0) }

    background-color: rgba(0,0,0,0);

  }

}

.plain-selected {

  i, .label {

    font-weight: bold;

    filter: invert(0) brightness(130%);

  }

  background-color: rgba(0,0,0,0.1);

  &:hover {

    opacity: 1;

  }

}

.small {

  margin: 6px 2px !important;
  padding: 6px 8px !important;

  .label {

    font-size: 13px !important;

  }

  i {

    font-size: 20px !important;

  }

}

</style>
