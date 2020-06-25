import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    id: '123123123',

    availableProfiles: [],
    /**
     * userId: String,
     * userName: String,
     * lang: String,
     * viewingClass: Enum,
     * isNextEpiAutoStart: Boolean,
     * isPreviewAutoStart: Booealn,
     * image: ''
     */
    selectedProfile: {}
  },
  actions,
  mutations,
  getters
}
