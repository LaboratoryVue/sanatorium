import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  mounted() {
    this.$store.dispatch('initItems')
  },
  render: h => h(App)
}).$mount('#app')
