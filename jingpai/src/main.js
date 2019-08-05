import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import './registerServiceWorker'
import './base_px.css'
import 'vant/lib/index.css'
// import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
// Vue.use(iView)





import axios from 'axios'
Vue.prototype.$axios = axios




// vant ui
import Vant from './vant/vant'
Vant()

// import Iview from './iviews/iview'
// Iview()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')