import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contents from '@/views/Contents'
import Latest from '@/views/Latest'
import MyList from '@/views/MyList'
import Profiles from '@/views/Profiles'
import { PATHS } from '@/constants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: PATHS.HOME, name: 'Home', component: Home },
    { path: `${PATHS.CONTENT_LIST}/:genreNum`, name: 'ContentList', component: Contents },
    { path: PATHS.LATEST_CONTENT, name: 'Latest', component: Latest },
    { path: PATHS.MY_LIST, name: 'MyList', component: MyList },
    { path: PATHS.PROFILES, name: 'Profiles', component: Profiles }
  ]
})
