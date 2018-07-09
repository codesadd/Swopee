<template>
  <div>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/">
          <a class="navbar-item navbar-left">
            <i class="fas fa-dollar-sign fa-2x"></i>
            <strong>wopee</strong>
          </a>
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu navbar-right">
        <div class="navbar-end">
          <!-- navbar items -->
          <div class="navbar-item has-dropdown is-hoverable" v-show="isAuth">
            <a class="navbar-link">
              Kriangkrai Prommaithong
            </a>
            <div class="navbar-dropdown is-right">
              <router-link to="/dashboard">
                <a class="navbar-item">
                  Dashboard
                </a>
              </router-link>
              <a class="navbar-item">
                test manu
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">
                Logout
              </a>
            </div>
          </div>
          <div class="navbar-item" v-show="!isAuth">
            <div class="field">
              <p class="control">
                <a class="bd-tw-button button" @click="signUpToAuth">
                  <span class="icon">
                    <i class="fab fa-facebook"></i>
                  </span>
                  <span>
                    Login Facebook
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isAuth: "isAuth"
    })
  },
  methods: {
    ...mapActions({
      logout: "logout",
      signUpToAuth: "signupWithProvider"
    })
  }
};
</script>

<style scope>
.navbar-right {
  padding-right: 10px;
}
.navbar-left {
  padding-left: 40px;
}
</style>
