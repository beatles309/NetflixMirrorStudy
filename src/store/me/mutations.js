import Vue from 'vue'
import {
  SET_PROFILES,
  SET_PROFILE
} from './mutations.type'

export default {
  [SET_PROFILES] (state, profiles) {
    Vue.set(state, 'availableProfiles', profiles)
  },
  [SET_PROFILE] (state, selectedProfileNo) {
    Vue.set(state, 'selectedProfile', _.find(state.availableProfiles, {'profileNo': selectedProfileNo}))
  }
}
