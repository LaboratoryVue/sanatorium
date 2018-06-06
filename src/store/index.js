import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const state = {
  items: []
}

const mutations = {
  INIT_ITEMS (state, payload) {
    state.items = payload
  }
}

const actions = {
  initItems({ commit }, payload) {
    axios.get('http://zdravdevadm.tour-shop.ru/api/v1/objects/')
      .then(response => {
        commit('INIT_ITEMS', response.data.data)
      })
      .catch(e => console.log(e))
  }
}

const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
