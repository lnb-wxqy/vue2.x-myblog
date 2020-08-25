import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login'
import Lunbo from '../views/Lunbo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    // component: () => import('../views/Register.vue')//延迟加载
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // component: () => import('../views/Login.vue')
  },
  {
    path: '/lunbo',
    name: 'Lunbo',
    component: Lunbo
    // component: () => import('../views/Lunbo.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
