import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/scss/custom.scss'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Vuelidate from 'vuelidate'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
