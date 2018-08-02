<template>
  <div id="app">
    <header-app v-if="isAuth"></header-app>
    <!-- <div class="container spacer-50"> -->
      <router-view ></router-view>
    <!-- </div> -->
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
      isLoading: 'loading',
      isAuth: 'IS_AUTH'
    })
  },
  created () {
    this.autoLogin()
  }
}
</script>

<style>
/* @import url("https://dank.sh/static/dmvendor.css");
body, button, input, select, textarea{
  font-family: dm
} */
.spacer-50 {
  padding-top: 50px;
}
</style>
