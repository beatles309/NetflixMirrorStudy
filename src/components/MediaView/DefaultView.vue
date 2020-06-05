<template>
<div class="ml-5 mr-5 mt-4">
  <div class="h4 mb-4">{{ message }}</div>
  <div class="row">
    <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval
      ="false" id="medialCarousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-2">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control-prev" href="#medialCarousel" data-slide="prev"><i class="carousel-control-prev-icon"></i></a>
      <a class="right carousel-control-next" href="#medialCarousel" data-slide="next"><i class="carousel-control-next-icon"></i></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DefaultView',
  props: {
    type: String
  },
  data () {
    return {
      // name과 msg는 모두 store에서 관리할 예정...
      name: '???',
      msg: {
        'viewing': ' 님이 시청 중인 콘텐츠',
        'star': '내가 찜한 콘텐츠'
      }
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
    }
  }
}
</script>

<style scoped>
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
