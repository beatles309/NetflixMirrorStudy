import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import { PATHS } from '@/constants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: PATHS.HOME,
      name: 'Home',
      component: Home
    }
  ]
})
