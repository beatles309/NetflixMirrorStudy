// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import beforEach from './router/beforeEach'
import store from './store'

Vue.config.productionTip = false
router.beforeEach(beforEach)

// bootstrap & jquery
/* eslint-disable */
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import 'jquery/dist/jquery.js'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
