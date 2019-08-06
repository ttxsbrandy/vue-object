import Vue from 'vue'
import Router from 'vue-router'
import LieBiao from '../views/LieBiao.vue'
// const Cart = () => import('../views/Cart.vue');
const Cart2 = () => import('../views/Cart2.vue');

import Xqing from '../views/Xqing.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {  
      name: 'liebiao',
      path: '/liebiao',    
      component: LieBiao
    },
    
    {   name:'xqing',
        path:'/xqing/:id/:name',
        component: Xqing
      
    },

    {
      path: '/car',
      name: 'car',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/car2',
      name: 'car2',
      component: Cart2
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    }, {
      path: '/',
      alias: 'index.html',
      redirect: () => {
        return 'home'
      }
    }, {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/reg.vue')
    },
    {
      path:'/duan',
      name:'duan',
      component:()=>import('../views/duanxin.vue')
    }
  ]
})