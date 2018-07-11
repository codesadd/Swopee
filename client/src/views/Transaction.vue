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
          <p class="title">{{ transactionDetail.listOfPlayer.length }}</p>
        </div>
      </div>
    </nav>
    <br>
    <br>
    <hr class="navbar-divider">
    <b-table
            :data="isEmpty ? [] : transactionDetail.listOfPlayer"
            :striped="true"
            :hoverable="true"
            :loading="false"
            :mobile-cards="true"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            default-sort="nameOfPlayer">

            <template slot-scope="props">
                <b-table-column field="nameOfPlayer" label="ชื่อ" sortable>
                  {{ props.row.nameOfPlayer }}
                </b-table-column>

                <b-table-column field="telOfPlayer" label="เบอร์ติดต่อ" sortable>
                  {{ props.row.telOfPlayer }}
                </b-table-column>
                <b-table-column field="bidToWon" label="ดอกเบี้ยที่เปีย" sortable numeric>
                  {{ props.row.bidToWon | currency }}
                </b-table-column>

                <b-table-column field="date" label="วันที่เปีย" centered>
                  <span class="tag" :class="{ 'is-success' : props.row.isWon , 'is-warning': !props.row.isWon }">
                    {{ props.row.isWon ? new Date(props.row.dateToWon).toLocaleDateString() : 'ยังไม่ได้เปีย' }}
                  </span>
                </b-table-column>

                <b-table-column field="action" label="แก้ไข" centered>
                  <a class="button is-primary is-rounded" @click="isBid = true">ใส่ดอกที่เปีย</a>
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
        <b-modal :active.sync="isBid" has-modal-card>
      <form name="addNewWallet">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">เปียแชร์</p>
          </header>
          <section class="modal-card-body">
            <b-field grouped>
              <b-input type="number" v-model="bidMoney" placeholder="ดอกที่เปีย" required>
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-danger" type="button" @click="isBid = false">ยกเลิก</button>
              <a class="button is-success">เพิ่ม</a>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEmpty: false,
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      totalInterestNow: null,
      totalMoney: null,
      transactionDetail: null,
      bidMoney: null,
      isBid: false
    }
  },
  mounted () {
    this.totalMoney =
      this.transactionDetail.listOfPlayer.length *
      this.transactionDetail.initMoney
    this.totalInterestNow = this.transactionDetail.listOfPlayer
      .map(player => player.bidToWon)
      .reduce((sumInterest, num) => sumInterest + num)
  },
  created () {
    this.transactionDetail = this.$store.getters.getTransactionById(
      this.$route.params.id
    )[0]
  },
  watch: {
    isBid () {
      if (this.isBid) {
        this.bidMoney = null
      }
    }
  }
}
</script>

<style>
</style>
