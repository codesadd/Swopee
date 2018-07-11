<template>
  <div>
    <section>
      <p class="control has-text-centered">
        <button class="button is-large is-primary" @click="signUpToAuth">Log in with Facebook</button>
      </p>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      signUpToAuth: 'signupWithProvider',
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
