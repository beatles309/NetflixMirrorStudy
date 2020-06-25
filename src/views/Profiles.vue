<template>
  <div class="layer">
    <div
      class="content bs-example">
      <select-profiles />
    </div>
    <span class="blank"></span>
  </div>
</template>

<script>
import store from '@/store'
import SelectProfiles from '@/components/profiles/SelectProfiles'
import {
  ME$FETCH_PROFILES
} from '@/store/me/actions.type'

export default {
  name: 'Profile',
  components: {
    SelectProfiles
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch(ME$FETCH_PROFILES).then(next)
  }
}
</script>
<style>
  .layer {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 50px;
  }
  .layer .content {
    display: inline-block;
    vertical-align: middle
  }
  .layer .blank {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle
  }
</style>
