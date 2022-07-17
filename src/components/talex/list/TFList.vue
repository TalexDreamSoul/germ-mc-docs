<template>

  <div class="TFList-Page">

    <transition-group tag="div" name="listTransition"
                      @enter="enter" @leave="leave" @beforeEnter="beforeEnter" @beforeLeave="beforeLeave"
    >

      <div :class="selectIndex === index ? 'extra-in' : 'extra-out'" :data-index="index"
           @click="selectIndex !== index ? selectIndex = index : selectIndex = -1" class="list-item" v-for="(item, index) in list" :key="keyName ? item[keyName] : index">

        <slot name="default" :item="item"></slot>

        <slot name="extra" v-if="clickAddon" :item="item"></slot>

      </div>

    </transition-group>

  </div>

</template>

<script>
export default {
  name: "TFList",
  props: {

    list: {

      type: Array,
      required: true,

    },

    keyName: {

      type: String,
      default: null,

    },

    clickAddon: {

      type: Boolean,
      default: false

    }

  },
  data() {

    return {

      selectIndex: -1,

    }

  },
  methods: {

    beforeEnter(el) {

        el.style.marginTop = '-100%'
        el.style.opacity = '0'
      el.style.transform = 'translateX(-25px)'
      el.style.transition = 'all .35s'

    },

    enter(el, done) {

      const delay = el.dataset.index * 80

      setTimeout(() => {

        el.style.marginTop = ''
        el.style.opacity = '1'
        el.style.transform = ''
        el.style.transition = ''

        done()

      }, delay)

    },

    beforeLeave(el) {

      el.style.transition = 'all .35s'

    },

    leave(el, done) {

      const delay = el.dataset.index * 80
      el.style.opacity = '0'
      el.style.transform = 'translateX(-25px)'

      setTimeout(() => {

        el.style.transition = ''

        done()

      }, delay)

    }

  }
}
</script>

<style lang="scss" scoped>

.TFList-Page {

  position: relative;

  min-height: 300px;

}

</style>
