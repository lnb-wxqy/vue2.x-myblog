<template>
  <div class="background"
       :style="backgroundDiv">
    Home
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/image/cjq.jpeg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
}
</style>

