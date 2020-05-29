<template>
<div id="index">
  <h1>Index Page</h1>
  <DefaultView type='viewing' class="mb-5"/>
  <DefaultView type='star'/>
</div>
</template>

<script>
import DefaultView from '../components/MediaView/DefaultView'

export default {
  name: 'Index.vue',
  components: {
    DefaultView
  }
}
</script>

<style scoped>

</style>
