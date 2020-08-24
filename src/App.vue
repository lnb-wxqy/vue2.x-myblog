<template>
  <div id="app">
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
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>
