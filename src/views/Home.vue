<template>
  <div class="home">
    <div class="home__card">
      คงเหลือ : {{ balance }}

      <div>
        <router-link to="/deposit">
          Deposit
        </router-link>
      </div>

      <div>
        <router-link to="withdraw">
          Withdraw
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters({
      balance: 'app/balance'
    })
  }
}
</script>

<style scoped>
  .home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home__card {
    border: 1px solid black;
    padding: 16px;
  }
</style>
