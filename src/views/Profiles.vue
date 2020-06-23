<template>
  <div>
    <ul>
      <li
        v-for="(profile, index) in availableProfiles"
        :key="index">
        {{ profile.profileName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapState({
      availableProfiles: state => state.me.account.availableProfiles
    })
  }
}
</script>
