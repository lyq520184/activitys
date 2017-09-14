import Vue from 'vue'
import Router from 'vue-router'
import science from '@/components/science'
import arts from '@/components/arts'
import index from '@/components/index'
import admit from '@/components/admit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/science/:id',
      name: 'science',
      component: science
    },
    {
      path: '/arts/:id',
      name: 'arts',
      component: arts
    },
    {
      path: '/admit',
      name: 'admit',
      component: admit
    }
  ]
})
