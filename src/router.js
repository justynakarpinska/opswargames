import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'games',
      component: Games
    },
    {
      path: '/about',
      name: 'about',

      component: () => import( './views/About.vue')
    },
    {
      path: '/game/:id',
      name: 'game',

      component: () => import( './views/Games.vue')
    },
    {
      path: '/job/:id',
      name: 'job',
      component: () => import('./views/Job.vue')
    }
  ]
})
