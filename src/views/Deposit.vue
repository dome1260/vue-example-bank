<template>
  <div class="deposit">
    <div class="deposit__card">
      <input type="number" v-model="money"><br><br>
      <button @click="submit()"> deposit </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DepositPage',
  data () {
    return {
      money: 0
    }
  },
  methods: {
    ...mapActions({
      setDeposit: 'app/setDeposit'
    }),
    submit () {
      this.setDeposit(this.money)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .deposit {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deposit__card {
    border: 1px solid black;
    padding: 16px;
  }
</style>
