import _ from 'lodash'

export default {
  isNotSetProfile (state, getters) {
    return _.isEmpty(state.selectedProfile)
  }
}
