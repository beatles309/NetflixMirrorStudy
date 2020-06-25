import { VIEW_CLASS } from '@/constants'

/**
 * get available user's profiles
 **/
export function getAvailableProfiles () {
  // return get('getprofileUrl')
  return Promise.resolve(
    [
      {
        profileNo: 1,
        profileName: '김진향',
        lang: 'Ko_kr',
        viewingClass: VIEW_CLASS.ALL,
        isNextEpiAutoStart: true,
        isPreviewAutoStart: true,
        image: 'https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg'
      },
      {
        profileNo: 2,
        profileName: '안상욱',
        lang: 'Ko_kr',
        viewingClass: VIEW_CLASS.ALL,
        isNextEpiAutoStart: true,
        isPreviewAutoStart: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/150630_%EA%B3%A0%EC%A4%80%ED%9D%AC_%EB%A9%94%EA%B0%80%EB%B0%95%EC%8A%A4_%EC%BD%94%EC%97%91%EC%8A%A4_%EB%82%98%EC%9D%98%EC%A0%88%EC%B9%9C%EC%95%85%EB%8B%B9%EB%93%A4_GV.jpg'
      },
      {
        profileNo: 3,
        profileName: '지향미',
        lang: 'Ko_kr',
        viewingClass: VIEW_CLASS.CHILD,
        isNextEpiAutoStart: true,
        isPreviewAutoStart: true,
        image: 'https://img7.yna.co.kr/photo/yna/YH/2017/05/26/PYH2017052613510001300_P2.jpg'
      }
    ]
  )
}
