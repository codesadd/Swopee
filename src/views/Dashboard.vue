<template>
  <div>
    <div class="columns">
      <scope-of-money-app v-for="scope in dataUsers.listOfScope" :scope="scope" :key="scope.id"></scope-of-money-app>
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
import { mapGetters } from 'vuex'
import ScopeOfMoney from '@/components/ScopeOfMoney.vue'
export default {
  components: {
    ScopeOfMoneyApp: ScopeOfMoney
  },
  computed: {
    ...mapGetters({
      dataUsers: 'dataUser'
    })
  }
}
</script>

<style scope>
  .card{
    height: 150px !important;
    border-radius: 5px;
  }
  .spacer-33{
    margin-top: 33px
  }

</style>
