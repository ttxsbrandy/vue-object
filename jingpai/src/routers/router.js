import Vue from 'vue'
import Router from 'vue-router'
import LieBiao from '../views/LieBiao.vue'

import Xqing from '../views/Xqing.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {  
      name: 'liebiao',
      path: '/',    
      component: LieBiao
    },
    
    {   name:'xqing',
        path:'/xqing/:id/:name',
        component: Xqing
      
    },
  ]
})
