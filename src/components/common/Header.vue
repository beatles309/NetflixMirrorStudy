<template>
  <nav class="navbar navbar-expand-md fixed-top" style="background:black">
    <button type="button" class="btn btn-default">
      <span class="glyphicon glyphicon-search"></span>
    </button>
    <div class="container-fluid">
      <div class="col-md-1">
        <h2 style="color:red">
            NETFLIX
        </h2>
      </div>
      <div class="col-md-8">
        <ul class="nav navbar-nav list-inline">
            <li
              v-for="(nav, index) in navList"
              :key="index"
              class="nav-item mr-3">
                <router-link :to="nav.path" class="navbar-link">
                {{ nav.label }}
                </router-link>
            </li>
          </ul>
      </div>
      <div col-md-3>
        <ul class="nav navbar-nav">
            <li class="navbar-link mr-3"><img src="../../assets/search.png" /></li>
            <li class="navbar-link mr-3"><img src="../../assets/gift.png" /></li>
            <li class="navbar-link mr-3"><img src="../../assets/noti.png" /></li>
            <li class="navbar-link mr-3"><img src="../../assets/picture.jpg"></li>
            <!-- <li
              v-for="(nav, index) in navigationList"
              :key="index">
              <img src="../../assets/gift.png" />
            </li> -->
          </ul>
      </div>
      </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { PATHS } from '@/constants'

const NAV_LIST = [
  { label: '홈', path: PATHS.INDEX },
  { label: 'TV 프로그램', path: `${PATHS.CONTENT_LIST}/83` },
  { label: '영화', path: `${PATHS.CONTENT_LIST}/250` },
  { label: '최신 컨텐츠', path: PATHS.LATEST_CONTENT },
  { label: '내가 찜한 컨텐츠', path: PATHS.MY_LIST }
]
export default {
  name: 'Header',
  computed: {
    ...mapState({
      navigationList: state => state.app.navigationList
    }),
    navList () {
      return NAV_LIST
    }
  },
  methods: {
    ...mapActions([

    ])
  }
}
</script>
<style scoped>
  a { text-decoration:none; color: white; }
  img { width: 30px; height: 30px; margin-right: 10px; background: white;}
</style>
