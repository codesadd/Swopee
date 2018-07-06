<template>
  <div>
    <section>
      <h1 class="subtitle is-3">มือละ {{ newWallet.initMoney | currency}} - เปียทุกวันที่ {{ newWallet.dateToPay }}</h1>
      <b-field grouped>
        <b-input size="is-large" v-model="name" placeholder="ชื่อ" expanded></b-input>
        <b-input size="is-large" type="number" v-model="tel" placeholder="เบอร์ติดต่อ" expanded></b-input>
        <b-input size="is-large" type="number" v-model="handToPlay" placeholder="จำนวนที่เล่น (มือ)" expanded></b-input>
        <p class="control">
          <button class="button is-large is-primary" @click="addListPlayer">เพิ่ม</button>
        </p>
      </b-field>
    </section>
    <hr>
    <section>
      <b-table :data="isEmpty ? [] : listOfInterest" :striped="true" :hoverable="true" :loading="false" :mobile-cards="true" :paginated="isPaginated"
        :per-page="perPage" :current-page.sync="currentPage" :pagination-simple="isPaginationSimple" :default-sort-direction="defaultSortDirection"
        default-sort="user.first_name">

        <template slot-scope="props">
          <b-table-column field="first_name" label="ชื่อ" sortable>
            {{ props.row.nameOfPlayer }}
          </b-table-column>

          <b-table-column field="last_name" label="เบอร์ติดต่อ" sortable>
            {{ props.row.telOfPlayer }}
          </b-table-column>
          <b-table-column field="interest_bid" label="ดอกเบี้ยที่เปีย" sortable numeric>
            {{ props.row.bidToWon | currency }}
          </b-table-column>

          <b-table-column field="date" label="วันที่เปีย" sortable centered>
            <span class="tag" :class="{ isSuccess: props.row.isWon }">
              {{ props.row.isWon ? new Date().toLocaleDateString() : text }}
            </span>
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
      <p class="control has-text-centered">
        <button class="button is-large is-info" @click="saveNewWallet">บันทึก</button>
      </p>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isEmpty: false,
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      listOfInterest: [],
      handToPlay: null,
      name: null,
      tel: null,
      text: 'ยังไม่ได้เปีย',
      newWallet: this.$route.params
    }
  },
  methods: {
    ...mapActions({
      addWallet: 'addWallet'
    }),
    addListPlayer () {
      for (let i = 0; i < this.handToPlay; i++) {
        this.listOfInterest.push({
          id: Math.max(Math.floor(Math.random() * 9999999999) + 1, 1),
          nameOfPlayer: this.name,
          telOfPlayer: this.tel,
          handOfPlayer: this.handToPlay,
          bidToWon: null,
          dateToWon: null,
          isWon: false
        })
      }
      this.handToPlay = null
      this.name = null
      this.tel = null
    },
    saveNewWallet () {
      console.log({
        id: this.newWallet.id,
        initMoney: this.newWallet.initMoney,
        dateToPay: this.newWallet.dateToPay,
        ownerInfo: { name: this.newWallet.ownerInfo.name },
        listOfPlayer: this.listOfInterest
      })
      this.addWallet({
        id: this.newWallet.id,
        initMoney: this.newWallet.initMoney,
        dateToPay: this.newWallet.dateToPay,
        ownerInfo: { name: this.newWallet.ownerInfo.name },
        listOfPlayer: this.listOfInterest
      })
    }
  }
}
</script>

<style>

</style>
