<template>
  <div>
    dashboard page
    <div class="columns">
      <scope-of-money-app></scope-of-money-app>
      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content has-text-centered spacer-33">
              <a class="button is-primary">เพิ่มแชร์ที่กำลังเล่น</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScopeOfMoney from '@/components/ScopeOfMoney.vue'
export default {
  components: {
    ScopeOfMoneyApp: ScopeOfMoney
  }
}
</script>

<style scope>
  .card{
    height: 150px !important;
  }
  .spacer-33{
    margin-top: 33px
  }

</style>
