import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import { PATHS } from '@/constants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: PATHS.INDEX,
      name: 'Index',
      component: Index
    }
  ]
})
