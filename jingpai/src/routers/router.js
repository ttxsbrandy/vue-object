import Vue from 'vue'
import Router from 'vue-router'
const Cart = () => import('../views/Cart.vue');
const Cart2 = () => import('../views/Cart2.vue');
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
      path: '/car',
      name: 'car',
      component: Cart
    },
    {
      path: '/car2',
      name: 'car2',
      component: Cart2
    },
  ]
})