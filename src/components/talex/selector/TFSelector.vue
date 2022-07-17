<template>

  <div class="TFSelectorPage">

    <div ref="PointerRef" :class="{ brighter, vertical }" class="TFSelectorPointer"></div>

    <slot></slot>

  </div>

</template>d

<script>

import TFSelectorItem from "./TFSelectorItem.vue";

let timer;

export default {
  name: "TFSelector",
  components: {TFSelectorItem},
  props: {

    vertical: {

      type: Boolean,
      default: false

    },

    routerMode: {

      type: Boolean,
      default: false

    },

    lazy: {

      type: Object | Function,
      default: null

    },

    small: {

      type: Boolean,
      default: false

    },

    brighter: {

      type: Boolean,
      default: false

    },

  },
  mounted() {

    if( !this.lazy ) {

      this.init()

    } else {

      this.lazy( () => {

        this.init()

      } )

    }

  },
  watch: {

    selectIndex: {

      handler(latest) {

        if( latest < 0 || latest > this.tabs.length - 1 ) {

          this.$refs.PointerRef.style.opacity = '0'
          return

        } else {

          this.$refs.PointerRef.style.opacity = '1'

        }

        // this.refreshChildrenSelected()
        this.fixPointerPos( this.tabs[latest].node )

      }

    }

  },
  methods: {

    init() {

      this.$nextTick(() => {

        if ( ! this.$slots || ! this.$slots.default ) return

        let ind = 0;

        for( let node of this.$el.children ) {

          const vnode = node.__vnode

          if ( node.className.indexOf( 'TFSelectorItemPage' ) !== -1 ) {

            const obj = { ind, node }

            this.tabs.push( obj )

            if ( this.vertical ) {

              node.className += " vertical"

            }

            if ( this.small ) {

              node.className += " small"

            }

            node.onclick = () => {

              if ( this.animating ) return;

              if ( this.routerMode ) {

                // console.dir( node )

                // console.log( vnode )

                // const targetPath = vnode.dirs[0].instance.to
                const targetPath = node.dataset.to

                if ( this.$route.fullPath !== targetPath )
                  this.$router.push( targetPath )

              }

              this.selectIndex = obj.ind;

              this.$emit( 'selectIndex', obj.ind )

            }

            ++ind;

          }

        }

        if ( this.routerMode ) {

          this.$nextTick( () => {

            // this.selectIndex = -1

            this.$watch( '$route.path', ( fullPath, oldValue ) => {

              if ( fullPath === oldValue ) return

              let matched = false

              this.tabs.forEach( ( node, ind ) => {

                if ( matched ) return

                // const ref = node.node.__vnode.dirs[0].instance

                // const to = ref.to

                const to = node.node.dataset.to

                if ( to === fullPath || fullPath.startsWith( to ) ) {

                  this.selectIndex = ind

                  matched = true

                }

              } )

              if ( !matched ) {

                this.selectIndex = -1
                // this.refreshChildrenSelected()

              }

              if ( this.tabs[this.selectIndex] && this.tabs[this.selectIndex].node )
                this.fixPointerPos( this.tabs[this.selectIndex].node )

            }, { immediate: true } )

          } )

        }

      })

    },

    // refreshChildrenSelected() {
    //
    //   this.tabs.forEach((tab, ind) => {
    //
    //     // tab.node.__vnode.dirs[0].instance.refreshSelect(this.selectIndex === ind)
    //
    //   })
    //
    // },

    fixPointerPos(vnode) {

      if( !timer ) {

        clearTimeout( timer )

      }

      timer = setTimeout(() => {

        const node = vnode
        const el = this.$refs.PointerRef

        if( this.vertical ) {

          const y = el.clientTop || el.offsetTop
          const height = el.clientHeight
          const targetY = node.offsetTop
          const targetHeight = node.clientHeight

          if( y < targetY ) {

            const addHeight = targetY - y + (targetHeight * 1.5) - height

            el.style.height = addHeight + 'px'
            const posY = targetY + (targetHeight / 2) - (height / 2)

            setTimeout(() => {

              el.style.height = (targetHeight) + 'px'
              el.style.top = posY + 'px'

            }, 250)

          } else {

            const addHeight = (y + height) - (targetY + (targetHeight * 0.5))

            el.style.transition = 'height .15s, top .15s'
            el.style.top = (targetY + (targetHeight * 0.5)) + 'px'
            el.style.height = (addHeight) + 'px'

            setTimeout(() => {

              el.style.transition = 'height .15s, top .35s'

              const posY = targetY + (targetHeight / 2) - (height / 2)
              el.style.top = posY + 'px'

              el.style.height = (targetHeight) + 'px'

            }, 250)

          }

          setTimeout(() => {

            el.style.top = targetY + 'px'

          }, 350)

        } else {

          const x = el.clientLeft || el.offsetLeft
          const width = el.clientWidth
          const targetX = node.offsetLeft
          const targetWidth = node.offsetWidth || node.clientWidth

          if( x < targetX ) {

            const addWidth = targetX - x + (targetWidth * 1.5) - width

            el.style.width = addWidth + 'px'
            const posX = targetX + (targetWidth / 2) - (width / 2)

            setTimeout(() => {

              el.style.width = (targetWidth) + 'px'
              el.style.left = posX + 'px'

            }, 250)

          } else {

            const addWidth = (x + width) - (targetX + (targetWidth * 0.5))

            el.style.transition = 'width .15s, left .15s'
            el.style.left = (targetX + (targetWidth * 0.5)) + 'px'
            el.style.width = (addWidth) + 'px'

            setTimeout(() => {

              el.style.transition = 'width .15s, left .35s'

              const posX = targetX + (targetWidth / 2) - (width / 2)
              el.style.left = posX + 'px'

              el.style.width = (targetWidth) + 'px'

            }, 250)

          }

          setTimeout(() => {

            el.style.left = targetX + 'px'

          }, 350)

        }

      }, 200)

    }

  },
  data() {

   return {

     selectIndex: -1,
     tabs: [],
     animating: false

   }

  }

}
</script>

<style lang="scss" scoped>

.TFSelectorPage {

  position: relative;
  display: inline-block;

  height: auto;

  .TFSelectorPointer {

    z-index: 1000;
    position: absolute;

    top: calc(100% - 10px);
    left: 0;

    width: 2px;
    height: 2px;

    border-radius: 5px;
    opacity: 0;

    box-shadow: 1px 0 5px #0288d1;
    background-color: #0288d1;
    transition: width .35s, left .15s;

    .vertical {

      top: 0;

      transition: height .35s, top .15s;

    }

  }

  //overflow: hidden;
  transition: all .25s;

}

.brighter {

  background-color: var(--app-lighter-color) !important;

  font-weight: bold;

  opacity: .9 !important;

  filter: invert(0) brightness(130%) !important;

}

</style>


<style>

@media only screen and (max-width: 600px) {

  .TFSelectorPage {

    display: none !important;

  }

}

</style>
