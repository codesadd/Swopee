<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <p class="brand-name">$wopper</p>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="/">
              <p class="contact">Contact</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Sharing Money Logger
          </h1>
          <!-- <h2 class="subtitle has-text-centered">
            มาเล่นแชร์ออนไลน์กันเถอะ ปลอดภัย 1,000,000%
          </h2> -->
        </div>
      </div>
    </section>
    <section>
      <p class="control has-text-centered">
        <button class="button is-large" @click="login">เริ่มต้นใช้งาน</button>
      </p>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      login: 'LOGIN',
      redirectToDashboard: 'REDIRECT_TO_DASHBOARD'
    })
  },
  created () {
    this.redirectToDashboard()
  }
}
</script>

<style scoped>
@import url("https://dank.sh/static/dmvendor.css");
/* body, button, input, select, textarea{
  font-family: dm
} */
.brand-name {
  font-family: dm;
  font-size: 30px;
  text-decoration: underline;
}
.contact {
  font-family: dm;
  text-decoration: underline;
}
.title {
  font-family: dm;
  font-size: 50px
}
.hero {
  padding-top: 60px
}
.subtitle {
  padding-top: 30px
}
</style>
