import Vue from 'vue'
import VueRouter from 'vue-router'
import userRouter from '@/router/module/user'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  ...userRouter
]

const router = new VueRouter({
  routes
})

// to: 要跳转的路由
// from： 从哪个路由过来
// next： 放行
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断是否需要登录
    // 判断用户是否登录
    if (store.state.userModule.token) {
      // 登录，放行
      // TODO 这里话要判断token的有效性：比如token是否过期，需要后台发放token的时候，带上token的有效期
      // 如果token无效，需要请求token
      next()
    } else {
      // 未登录，跳转到登陆页面
      router.push({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
