<template>
  <div id="app">
    <header-app></header-app>
    <div class="container spacer-50">
      <router-view></router-view>
    </div>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/views/Header.vue'
export default {
  components: {
    HeaderApp: Header
  },
  methods: {
    ...mapActions({
      autoLogin: 'AUTO_LOGIN'
    })
  },
  computed: {
    ...mapGetters({
      isLoading: 'loading'
    })
  },
  created () {
    this.autoLogin()
  }
}
</script>

<style scope>
.spacer-50 {
  padding-top: 50px;
}
</style>
