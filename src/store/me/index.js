import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const VIEW_CLASS = {
  ALL: 'ALL',
  MIDDLE: 'MIDDLE',
  CHILD: 'CHILD'
}

export default {
  namespaced: true,
  state: {
    account: {
      id: '123123123',

      availableProfiles: [
        {
          profileNo: 1,
          profileName: '김진향',
          lang: 'Ko_kr',
          viewingClass: VIEW_CLASS.ALL,
          isNextEpiAutoStart: true,
          isPreviewAutoStart: true,
          image: '../assets/iu.jp'
        },
        {
          profileNo: 2,
          profileName: '안상욱',
          lang: 'Ko_kr',
          viewingClass: VIEW_CLASS.ALL,
          isNextEpiAutoStart: true,
          isPreviewAutoStart: true,
          image: '../assets/ko.jp'
        }
      ],
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
    }
  },
  actions,
  mutations,
  getters
}
