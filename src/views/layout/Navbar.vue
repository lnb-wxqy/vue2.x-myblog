<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand
        >五行缺雨 <b-icon icon="alarm-fill"></b-icon>
        <!-- <b-row class="text-md-center">
          <b-col md="6"
                 class="mb-3">
            五行缺雨<b-icon icon="arrow-counterclockwise"
                    animation="spin-reverse"
                    font-scale="1"></b-icon>
          </b-col>
        </b-row> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <!-- // 导航到路由名为login的页面和register的页面 -->
            <!-- 此处name为 router 目录下 index.js中路由的名字name -->
            <b-nav-item @click="$router.replace({ name: 'Login' })"
              >登录</b-nav-item
            >
            <b-nav-item @click="$router.replace({ name: 'Register' })"
              >注册</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
