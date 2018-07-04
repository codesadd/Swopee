<template>
  <div>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>

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
              <a class="navbar-item" href="/documentation/overview/start/">
                Settings
              </a>
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

<style>
  .navbar-right{
    padding-right: 10px
  }

</style>
