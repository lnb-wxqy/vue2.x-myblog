<template>
  <div>
    <b-navbar toggleable="lg"
              type="dark"
              variant="info">
      <!-- <b-container> -->
      <b-navbar-brand @click="$router.push({ name: 'home' })">五行缺雨 <b-icon icon="alarm-fill"></b-icon>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse"
                  is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right
                               v-if="userInfo">
            <template v-slot:button-content>
              <em>{{ userInfo.name }}</em>
            </template>
            <b-dropdown-item @click="
                $router.push(
                  { name: 'profile' },
                  onComplete => {},
                  onAbort => {}
                )
              ">个人中心</b-dropdown-item>
            <b-dropdown-item v-if="$route.name != 'home'"
                             @click="$router.replace({ name: 'home' })">返回首页</b-dropdown-item>
            <b-dropdown-item @click="logout">登出</b-dropdown-item>
          </b-nav-item-dropdown>

          <div v-if="!userInfo">
            <b-navbar-nav>
              <!-- // 导航到路由名为login的页面和register的页面 -->
              <!-- 此处name为 router 目录下 index.js中路由的名字name -->
              <b-nav-item v-if="$route.name != 'login'"
                          @click="$router.replace({ name: 'login' })">登录</b-nav-item>
              <b-nav-item v-if="$route.name != 'register'"
                          @click="$router.replace({ name: 'register' })">注册</b-nav-item>
            </b-navbar-nav>
          </div>
        </b-navbar-nav>
      </b-collapse>
      <!-- </b-container> -->
    </b-navbar>
  </div>
</template>

<script>
// import storageService from '@/service/storageService' #0826

import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  //定义一个计算属性
  computed: mapState({
    // Register.vue中存储userInfo时进行了序列化，所以这儿需要反序列化
    // userInfo: state => JSON.parse(state.userModule.userInfo)
    userInfo: state => state.userModule.userInfo
  }),
  methods: mapActions('userModule', ['logout'])
}
</script>
