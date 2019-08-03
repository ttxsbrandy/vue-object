import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import './registerServiceWorker'


import axios from 'axios'
Vue.prototype.$axios = axios

// vant ui
import Vant from './vant/vant'
Vant()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
