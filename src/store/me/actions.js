import {
  FETCH_PROFILES,
  SELECT_PROFILE
} from './actions.type'
import {
  SET_PROFILES,
  SET_PROFILE
} from './mutations.type'

import {
  getAvailableProfiles
} from '@/common/api/me'

export default {
  [FETCH_PROFILES] ({ commit }) {
    return getAvailableProfiles()
      .then(result => commit(SET_PROFILES, result))
      .catch()
  },
  [SELECT_PROFILE] ({ dispatch, commit }, selectedProfileNo) {
    return commit(SET_PROFILE, selectedProfileNo)
  }
}
