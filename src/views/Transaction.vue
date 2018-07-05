<template>
  <div>
    <nav class="level is-mobile is-primary">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">เงินต้น</p>
          <p class="title">{{ totalMoney | currency }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">ดอกเบี้ยสะสม</p>
          <p class="title">{{ totalInterestNow | currency }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">คนเล่นทั้งหมด</p>
          <p class="title">{{ transactionDetail.totalPlayer }}</p>
        </div>
      </div>
    </nav>
    <b-table
            :data="isEmpty ? [] : transactionDetail.listOfInterest"
            :striped="true"
            :hoverable="true"
            :loading="false">

            <template slot-scope="props">
                <b-table-column field="id" label="ลำดับ" width="40" numeric>
                    {{ props.index+1 }}
                </b-table-column>

                <b-table-column field="first_name" label="ชื่อ">
                    เกรียงไกร
                </b-table-column>

                <b-table-column field="last_name" label="นามสกุล">
                    พรหมไหมทอง
                </b-table-column>
                <b-table-column field="interest_bid" label="ดอกเบี้ยที่เปีย">
                    {{ props.row | currency }}
                </b-table-column>

                <b-table-column field="date" label="วันที่เปีย" centered>
                    <span class="tag is-success">
                        {{ new Date('2018/10/15').toLocaleDateString() }}
                    </span>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      totalInterestNow: null,
      totalMoney: null,
      transactionDetail: null
    }
  },
  mounted () {
    console.log(this.transactionDetail)
    this.totalMoney = this.transactionDetail.totalPlayer * this.transactionDetail.initMoney
    this.totalInterestNow = this.transactionDetail.listOfInterest.reduce((sumInterest, num) => sumInterest + num)
  },
  created () {
    console.log('created')
    this.transactionDetail = this.$store.getters.getTransactionById(this.$route.params.id)[0]
  },
  computed: {
    ...mapGetters({

    })
  }
}
</script>

<style>

</style>
