<template>
  <div>
    <p>
      <span v-if="userInfo">你好！{{ userInfo.name }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    // Register.vue中存储userInfo时进行了序列化，所以这儿需要反序列化
    userInfo: state => state.userModule.userInfo
  })
}
</script>
