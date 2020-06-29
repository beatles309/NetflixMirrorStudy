<template>
  <div id="app">
    <div id="header" class="d-flex">
      <main-header />
    </div>
    <infinite-loading />
    <div id="footer" class="footer">
      <main-footer />
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/common/Header'
import MainFooter from '@/components/common/Footer'
import InfiniteLoading from '@/views/infiniteScrollTest'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    InfiniteLoading
  }
}
</script>

<style>

</style>
