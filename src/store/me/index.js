import action from './action'
import mutation from './mutation'
import getter from './getter'

export default {
  namespaced: true,
  state: {
    userId: '',
    userName: '',
    lang: '',
    viewingClass: ''
  },
  action,
  mutation,
  getter
}
