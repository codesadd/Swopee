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
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Kriangkrai Prommaithong
            </a>
            <div class="navbar-dropdown is-right">
              <router-link to="/dashboard">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Dashboard
                </a>
              </router-link>
              <a class="navbar-item" href="/documentation/overview/start/">
                test manu
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="/documentation/overview/start/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>

  .navbar-right{
    padding-right: 10px
  }
  .navbar-left{
    padding-left: 40px
  }

</style>
