<template>
  <div>
    <nav class="level is-primary">
      <div class="level-item has-text-centered">
        <div>
          <p class="is-large">เงินต้น</p>
          <p class="title">{{ totalMoney | currency }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="is-large">ดอกเบี้ยสะสม</p>
          <p class="title">{{ totalInterestNow | currency }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="is-large">คนเล่นทั้งหมด</p>
          <p class="title">{{ transactionDetail.totalPlayer }}</p>
        </div>
      </div>
    </nav>
    <br>
    <br>
    <hr class="navbar-divider">
    <b-table
            :data="isEmpty ? [] : transactionDetail.listOfInterest"
            :striped="true"
            :hoverable="true"
            :loading="false"
            :mobile-cards="true"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            default-sort="user.first_name">

            <template slot-scope="props">
                <b-table-column field="first_name" label="ชื่อ" sortable>
                  เกรียงไกร พรหมไหมทอง
                </b-table-column>

                <b-table-column field="last_name" label="เบอร์ติดต่อ" sortable>
                  081-857-8334
                </b-table-column>
                <b-table-column field="interest_bid" label="ดอกเบี้ยที่เปีย" sortable numeric>
                  {{ props.row | currency }}
                </b-table-column>

                <b-table-column field="date" label="วันที่เปีย" sortable centered>
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
      isEmpty: false,
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      totalInterestNow: null,
      totalMoney: null,
      transactionDetail: null
    }
  },
  mounted () {
    this.totalMoney = this.transactionDetail.totalPlayer * this.transactionDetail.initMoney
    this.totalInterestNow = this.transactionDetail.listOfInterest.reduce((sumInterest, num) => sumInterest + num)
  },
  created () {
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
