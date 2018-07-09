<template>
  <div>
    <section>
      <p class="control has-text-centered">
        <button class="button is-large is-primary" @click="signUpToAuth">Log in with Facebook</button>
      </p>
    </section>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      signUpToAuth: "signupWithProvider",
      redirectToDashboard: "redirectToDashboard"
    })
  },
  computed: {
    ...mapGetters({
      isLoading: "loading"
    })
  },
  created() {
    this.redirectToDashboard();
  }
};
</script>

<style>
</style>
