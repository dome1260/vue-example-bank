<template>
  <div class="withdraw">
    <div class="withdraw__card">
      <input type="number" v-model="money"><br><br>
      <button @click="submit()"> withdraw </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'WithdrawPage',
  data () {
    return {
      money: 0
    }
  },
  computed: {
    ...mapGetters({
      balance: 'app/balance'
    })
  },
  methods: {
    ...mapActions({
      setWithdraw: 'app/setWithdraw'
    }),
    submit () {
      if (this.balance) {
        this.setWithdraw(this.money)
        this.$router.push('/')
      } else {
        alert('กรุณาฝากเงินก่อน')
      }
    }
  }
}
</script>

<style scoped>
  .withdraw {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .withdraw__card {
    border: 1px solid black;
    padding: 16px;
  }
</style>
