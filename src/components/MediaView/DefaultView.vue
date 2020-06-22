<template>
<div class="ml-5 mr-5 mt-4">
  <div class="h4 mb-4">{{ message }}</div>
  <div class="row">
    <tiny-slider v-if="isList" :mouse-drag="true" :loop="true" items="6" gutter="20" :nav="false" :arrowKeys="true" :controls="false">
      <img v-for="(src, idx) in imageList" :key="idx" :src="src" class="slide-item"/>
    </tiny-slider>
  </div>
</div>
</template>

<script>
import { movieDB, IMG_URL } from '@/common/api/moviedb'
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'DefaultView',
  props: {
    type: String
  },
  components: {
    'tiny-slider': VueTinySlider
  },
  data () {
    return {
      // name과 msg는 모두 store에서 관리할 예정...
      name: '???',
      msg: {
        'viewing': ' 님이 시청 중인 콘텐츠',
        'star': '내가 찜한 콘텐츠'
      },
      imageList: []
    }
  },
  computed: {
    // store에서 관리할 예정
    message () {
      if (this.type === 'viewing') {
        return this.name + this.msg[this.type]
      } else {
        return this.msg[this.type]
      }
    },
    isList () {
      return this.imageList.length !== 0
    }
  },
  methods: {
    getMovieTopRated () {
      movieDB.getMovieTopRated('ko-KR', '1')
        .then(json => {
          this.imageList = json.data.results.map(value => {
            return IMG_URL + value.poster_path
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    // API TEST 용
    this.getMovieTopRated()
  }
}
</script>

<style scoped>
  .slide-item {
    max-width: 100%;
  }
  /* 이미지 위에 올리면 키우는 거. 아직 완벽하지 않아서 적용하지 않음.*/
  .media-view {
    position:relative;
    display:inline;
    border:none;
    transform:scale(1);
    -webkit-transform:scale(1);
    -moz-transform:scale(1);
    z-index:1;
    transition:transform .5s, border .5s;
    -webkit-transition:-webkit-transform .5s, border .5s;
    -moz-transition:-moz-transform .5s, border .5s;
  }
  .media-view:hover {
    position:relative;
    display:inline;
    border-radius: 2px;
    transform:scale(1);
    -webkit-transform:scale(1.3);
    -moz-transform:scale(2);
    z-index:10;
    transition:transform .5s, border .5s;
    -webkit-transition:-webkit-transform .5s, border .5s;
    -moz-transition:-moz-transform .5s, border .5s;
  }
</style>
