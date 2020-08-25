import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // component: () => import('../views/lunbo/Lunbo.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
    // component: () => import('../views/Register.vue')//延迟加载
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    // component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
