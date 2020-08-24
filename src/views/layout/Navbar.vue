<template>
  <div>
    <b-navbar toggleable="lg"
              type="dark"
              variant="info">
      <b-navbar-brand>五行缺雨 <b-icon icon="alarm-fill"></b-icon>
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
      <b-collapse id="nav-collapse"
                  is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item>登录</b-nav-item>
            <b-nav-item>注册</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
