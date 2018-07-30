<template>
  <div name="home">
    <!-- <b-table :data="dataUser.listMoney" :striped="true" :hoverable="true" :loading="isLoading">

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.index+1 }}
        </b-table-column>

        <b-table-column field="money" label="เงินต้น">
          {{ props.row.money }}
        </b-table-column>

        <b-table-column field="numberOfMoney" label="จำนวนที่เล่น">
          {{ props.row.numberByMoney }}
        </b-table-column>

        <b-table-column field="totalPlayer" label="คนเล่นทั้งหมด" centered>
          <span class="tag is-success">
            {{ props.row.totalPlayer }}
          </span>
        </b-table-column>
      </template>
    </b-table> -->
    {{dataUser}}
    <b-field grouped>
      <b-field label="เงินต้น">
        <b-input v-model="money"></b-input>
      </b-field>
      <b-field label="จำนวนที่เล่น (มือ)" expanded>
        <b-input v-model="numberByMoney"></b-input>
      </b-field>
      <b-field label="คนที่เล่นทั้งหมด" expanded>
        <b-input v-model="totalPlayer"></b-input>
      </b-field>
    </b-field>
    <p class="control">
                <button class="button is-info" @click="addNewPayment">Save</button>
            </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      money: '',
      numberByMoney: '',
      totalPlayer: '',
      isLoading: true
    }
  },
  mounted () {
    if (this.dataUser) {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  },
  computed: {
    dataUser () {
      return this.$store.getters.dataUser
    }
  },
  methods: {
    ...mapActions({
      placeToAddPayment: 'addPayment'
    }),
    addNewPayment () {
      this.placeToAddPayment({
        money: this.money,
        totalPlayer: this.totalPlayer,
        numberByMoney: this.numberByMoney
      })
    }
  }
}
</script>

<style>
</style>
