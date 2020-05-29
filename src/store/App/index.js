import action from './action'
import mutation from './mutation'
import getter from './getter'

export default {
  namespaced: true,
  state: {
    /**
     * @type {Array} Top navigation menu list
     */
    navigationList: ['Home', 'TV 프로그램', '최신 등록 컨텐츠', '내가 찜한 컨텐츠']
  },
  action,
  mutation,
  getter
}
