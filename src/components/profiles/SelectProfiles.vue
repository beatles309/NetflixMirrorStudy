<template>
  <div class="row">
    <div
      v-for="(profile, index) in availableProfiles"
      :key="index"
      class="col-xs-6 col-md-3">
      <a
        href="#"
        class="thumbnail"
        @click.prevent="onClickProfile(profile.profileNo)">
        <img
          :src="profile.image"
          alt=""
          style="height: 180px; width: 180px; display: block;" />
        {{ profile.profileName }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from 'vue-router'
import { PATHS } from '@/constants'
import { ME$SELECT_PROFILE } from '@/store/me/actions.type'

export default {
  name: 'SelectProfiles',
  computed: {
    ...mapState({
      availableProfiles: state => state.me.availableProfiles
    })
  },
  methods: {
    ...mapActions([
      ME$SELECT_PROFILE
    ]),
    onClickProfile (selectedProfileNo) {
      this[ME$SELECT_PROFILE](selectedProfileNo)
        .then(this.$router.push(PATHS.HOME))
    }
  }
}
</script>
