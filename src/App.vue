<template>
  <div id="app"
       class="background">
    <Navbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/views/layout/Navbar'

export default {
  components: { Navbar },
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('./assets/logo.png') + ')',
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
  z-index: -1;
  position: absolute;
}
</style>
