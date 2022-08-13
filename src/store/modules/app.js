const state = {
  balance: 0
}

const mutations = {
  SET_DEPOSIT (state, payload) { // +20000
    state.balance += Number(payload)
  },
  SET_WITHDRAW (state, payload) { // -2000
    state.balance -= Number(payload)
  },
}

const actions = {
  setDeposit ({ commit }, payload) {
    commit('SET_DEPOSIT', payload)
  },
  setWithdraw ({ commit }, payload) {
    commit('SET_WITHDRAW', payload)
  },
}

const getters = {
  balance: (state) => state.balance
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
