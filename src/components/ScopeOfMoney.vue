<template>
  <div class="column is-3">
    <router-link :to="{ path: '/transaction/'+ scope.id}">
        <div class="card card-hover">
          <div class="card-content">
            <div class="content">
              เถ้าแชร์ : {{ scope.ownerInfo.name }}
              <br> เงินต้น : {{totalMoney}}
              <br> ดอกเบี้ยสะสม : {{totalInterestNow}}
            </div>
          </div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['scope'],
  data () {
    return {
      totalMoney: null,
      totalInterestNow: null
    }
  },
  mounted () {
    this.totalMoney = this.scope.totalPlayer * this.scope.initMoney
    this.totalInterestNow = this.scope.listOfInterest.reduce((sumInterest, num) => sumInterest + num)
  },
  methods: {
  }
}
</script>

<style scope>
 .card{
    height: 150px !important;
    border-radius: 5px;
  }
  .spacer-33{
    margin-top: 33px;
  }
  .card-hover:hover {
    box-shadow: 0 5px 10px rgba(10, 10, 10, 0.226), 0 0 0 1px rgba(10, 10, 10, 0.1)
  }
</style>
