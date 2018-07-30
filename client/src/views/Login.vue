<template>
  <div>
    <section class="hero is-medium is-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            SWopper
          </h1>
          <h2 class="subtitle">
            เว็บจัดการ แชร์
          </h2>
          <button class="button is-large is-primary" @click="signUpToAuth">Log in with Facebook</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      signUpToAuth: 'LOGIN',
      redirectToDashboard: 'redirectToDashboard'
    })
  },
  created () {
    this.redirectToDashboard()
  }
}
</script>

<style>
</style>
