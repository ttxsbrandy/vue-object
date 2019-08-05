import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import './registerServiceWorker'
import './base.css'


import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from 'qs'
Vue.prototype.$qs = qs;
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
