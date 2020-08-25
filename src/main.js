import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/scss/custom.scss'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Vuelidate from 'vuelidate'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//validate
Vue.use(Vuelidate)

//axios
//此处 Vue.use(axios)不需要，否则会报如下错误：
// Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
//Vue.use(axios)

// 此处必须设置，否则报如下错误
// [Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'post' of undefined"
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
