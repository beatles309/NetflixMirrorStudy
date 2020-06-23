import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    home
  }
})
