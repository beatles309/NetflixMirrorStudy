<template>
  <div class="ml-5 mt-4">
  <h4 class="mb-4">{{ message }}</h4>
  <div class="row">
    <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval
      ="3000" id="medialCarousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
              <img src="static/images/test_image.jpeg" alt="Netflix Content" class="img-fluid"/>
            </div>
            <div class="col-md-3">
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
      <!-- <div>
          <h1>Netflix</h1>
          <li
            v-for="(nav, index) in navigationList"
            :key="index" >
            {{ nav }}
          </li>
      </div> -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      navigationList: state => state.app.navigationList
    })
  },
  methods: {
    ...mapActions([

    ])
  }
}
</script>
