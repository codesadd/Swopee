<template>
  <div>
    <div class="columns is-multiline is-mobile">
      <scope-of-money-app v-for="scope in listOfScope" :scope="scope" :key="scope.id"></scope-of-money-app>
      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content has-text-centered spacer-33">
              <button class="button is-primary" @click="isComponentModalActive = true">
                เพิ่มแชร์ที่กำลังเล่น
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <form name="addNewWallet">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">เพิ่มแชร์ที่จะเล่นใหม่</p>
          </header>
          <section class="modal-card-body">
            <b-field grouped>
              <b-input type="number" v-model="money" placeholder="คุณเล่นแชร์มือละเท่าไหร่" required>
              </b-input>
              <b-input type="text" v-model="name" placeholder="ตั้งชื่อ" required>
              </b-input>
              <b-input type="number" v-model="dateToPay" placeholder="เปียทุกวันที่" required>
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
              <a class="button is-primary" @click="addNewWallet">เพิ่ม</a>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ScopeOfMoney from "@/components/ScopeOfMoney.vue";
export default {
  data() {
    return {
      isComponentModalActive: false,
      money: null,
      name: null,
      dateToPay: null
    };
  },
  components: {
    ScopeOfMoneyApp: ScopeOfMoney
  },
  methods: {
    addNewWallet() {
      this.$router.push({
        name: "newWallet",
        params: {
          id: Math.max(Math.floor(Math.random() * 9999999999) + 1, 1),
          ownerInfo: {
            name: this.name
          },
          initMoney: this.money,
          dateToPay: this.dateToPay
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      dataUsers: "dataUser",
      listOfScope: "getListOfScope"
    })
  },
  watch: {
    isComponentModalActive() {
      if (this.isComponentModalActive) {
        this.money = null;
        this.name = null;
        this.dateToPay = null;
      }
    }
  }
};
</script>

<style scope>
.card {
  height: 150px !important;
  border-radius: 5px;
}
.spacer-33 {
  margin-top: 33px;
}
</style>
