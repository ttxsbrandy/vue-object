import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/Detail.vue'),
      children: [{
          path: 'det',
          name: 'det',
          component: () => import('../views/optionCard/det.vue')
        }, {
          path: 'commend',
          name: 'commend',
          component: () => import('../views/optionCard/commend.vue')
        }, {
          path: 'consult',
          name: 'consult',
          component: () => import('../views/optionCard/consult.vue')
        },
        {
          path: '/detail',
          redirect: () => {
            return '/detail/det'
          }
        }
      ]

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
    }
  ]
})