<template>
  <div id="app">
    <header-app></header-app>
    <div class="container spacer-50">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  components: {
    HeaderApp: Header
  }
}
</script>

<style scope>
  .spacer-50{
    padding-top: 50px
  }
</style>
