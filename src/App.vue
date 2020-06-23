<template>
  <div
    id="app">
<!--    style="background-color: #111111">-->
<!--    <div id="header" class="d-flex">-->
<!--      <main-header />-->
<!--    </div>-->
    <router-view />
    <div id="footer" class="footer">
      <main-footer />
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/common/Header'
import MainFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>

</style>
