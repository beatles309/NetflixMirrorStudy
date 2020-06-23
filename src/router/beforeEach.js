import store from '@/store'
import { PATHS } from '@/constants'

export default (to, from, next) => {
  /// profile을 선택하지 않았으면 profile 선택 페이지로 강제 리다이렉트
  if (store.getters['me/isNotSetProfile'] && to.path !== PATHS.PROFILES) {
    next(PATHS.PROFILES)
  } else {
    next()
  }
}
