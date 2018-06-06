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
  },
  sortUpByStars({ commit }) {
    const items = state.items.sort((a, b) => a.meta.star - b.meta.star)
    commit('INIT_ITEMS', items)
  },
  sortDownByStars({ commit }) {
    const items = state.items.sort((a, b) => b.meta.star - a.meta.star)
    commit('INIT_ITEMS', items)
  },
  sortUpByName({ commit }) {
    const items = state.items.sort((a, b) => a.meta.slug.toLowerCase() > b.meta.slug.toLowerCase())
    commit('INIT_ITEMS', items)
  },
  sortDownByName({ commit }) {
    const items = state.items.sort((a, b) => b.meta.slug.toLowerCase() > a.meta.slug.toLowerCase())
    commit('INIT_ITEMS', items)
  }
}

const getters = {
  getItems (state) {
    return state.items
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
