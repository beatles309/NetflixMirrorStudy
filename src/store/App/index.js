import action from './action'
import mutation from './mutation'
import getter from './getter'

export default {
    namespaced: true,
    state: {
        /**
         * @type {Array} Top navigation menu list
         */
        navigationList: []
    },
    action,
    mutation,
    getter
}