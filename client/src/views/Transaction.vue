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
    {{ bidMoney }}
    <br>
    <hr class="navbar-divider">
    <b-table :data="isEmpty ? [] : transactionDetail.listOfPlayer" :striped="true" :hoverable="true" :loading="false" :mobile-cards="true"
      :paginated="isPaginated" :per-page="perPage" :current-page.sync="currentPage" :pagination-simple="isPaginationSimple"
      :default-sort-direction="defaultSortDirection" default-sort="nameOfPlayer">

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
          <a class="button is-primary is-rounded" v-if="!props.row.isWon" @click="addBid(props)">ใส่ดอกที่เปีย</a>
          <a class="button is-info is-rounded" v-if="props.row.isWon" @click="editBid(props)">แก้ไขดอกที่เปีย</a>
        </b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large">
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
            <p class="modal-card-title">{{ selected ? selected.nameOfPlayer : null }}เปียแชร์</p>
          </header>
          <section class="modal-card-body">
            <b-field grouped>
              <cleave class="input" v-model="bidMoney" :options="options" placeholder="ดอกที่เปีย" required></cleave>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-danger" type="button" @click="isBid = false">ยกเลิก</button>
            <a class="button is-success" @click="bidWon">เพิ่ม</a>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import cleave from 'vue-cleave-component'
import { mapActions } from 'vuex'
export default {
  components: {
    cleave
  },
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
      isBid: false,
      selected: null,
      options: {
        numeral: true
      }
    }
  },
  mounted () {
    this.totalMoney = this.transactionDetail.listOfPlayer.length * this.transactionDetail.initMoney
    this.calTotalInterest()
  },
  created () {
    this.transactionDetail = this.$store.getters.GET_TRANSACTION(
      this.$route.params.id
    )[0]
  },
  watch: {
  },
  methods: {
    ...mapActions({
      addBidToStore: 'ADD_BID_TRANSACTION'
    }),
    bidWon () {
      this.selected.row.bidToWon = parseInt(this.bidMoney)
      this.selected.row.dateToWon = new Date().toLocaleDateString()
      this.selected.row.isWon = true
      this.calTotalInterest()
      this.addBidToStore({
        id: this.transactionDetail.id,
        selected: this.selected
      })
      this.isBid = false
    },
    calTotalInterest () {
      this.totalInterestNow = this.transactionDetail.listOfPlayer
        .map(player => player.bidToWon)
        .reduce((sumInterest, num) => sumInterest + num)
    },
    addBid (selected) {
      this.bidMoney = null
      this.isBid = true
      this.selected = selected
    },
    editBid (selected) {
      this.selected = selected
      this.bidMoney = this.selected.bidToWon
      this.isBid = true
    }
  }
}
</script>

<style>
</style>
