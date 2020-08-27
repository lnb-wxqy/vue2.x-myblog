import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const userRouter = [
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue') //延迟加载
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      auth: true //自定义
    },
    component: () => import('@/views/Profile.vue')
  }
]

export default userRouter
