<template>
  <div>
    <table
      sytle="table-layout: fixed; width: 100%;"
      class="table talbe-hover table-striped">
      <colgroup>
        <col width="30px">
        <col width="230px">
        <col width="70px">
        <col width="110px">
        <col width="60px">
      </colgroup>
      <thead>
        <tr>
          <th>Id</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td> {{ user.ID }}</td>
          <td> {{ user.DISPLAY_NAME}}</td>
          <td> {{ user.CLASS }}</td>
          <td> {{ user.DATE }}</td>
          <td> {{ user.COUNT }}</td>
        </tr>
      </tbody>
      <infinite-loading @infinite="infiniteHandler" spinner="waveDots" />
    </table>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { getTestData } from '../common/api/media/infiniteTest'

export default {
  name: 'infiniteScrollTest.vue',
  components: {
    InfiniteLoading
  },
  data () {
    return {
      limit: 0,
      users: []
    }
  },
  methods: {
    infiniteHandler ($state) {
      console.log($state)
      getTestData()
        .then(response => {
          setTimeout(() => {
            if (response.length) {
              this.users = this.users.concat(response)
              $state.loaded()
              this.limit += 10
              if (this.users.length / 10 === 0) {
                $state.complete()
              }
            } else {
              $state.complete()
            }
          }, 1000)
        }).catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
