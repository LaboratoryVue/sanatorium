<template>
  <div id="app" class="container">
    <div class="row my-4">
      <div class="col">
        <h2 class="text-capitalize">список санаториев</h2>
      </div>
    </div>
    <div class="row mb-4">
      <h4 class="mb-4">фильтр по звездам и по названию объекта</h4>
      <div class="col-6">
        <h4 class="mb-4">по звездам</h4>
        <button @click="sortUpByStars()" type="button" class="text-capitalize btn btn-primary mr-2">up</button>
        <button @click="sortDownByStars()" type="button" class="text-capitalize btn btn-primary">down</button>
      </div>
      <div class="col-6">
        <h4 class="mb-4">по названию объекта</h4>
        <button @click="sortUpByName()" type="button" class="text-capitalize btn btn-primary mr-2">up</button>
        <button @click="sortDownByName()" type="button" class="text-capitalize btn btn-primary mr-2">down</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StartPage :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
  import StartPage from './components/StartPage.vue'

  export default {
    name: 'app',
    components: {
      StartPage
    },
    computed: {
      items () {
        return this.$store.getters.getItems
      }
    },
    methods: {
      sortUpByStars() {
        this.$store.dispatch('sortUpByStars')
      },
      sortDownByStars() {
        this.$store.dispatch('sortDownByStars')
      },
      sortUpByName() {
        this.$store.dispatch('sortUpByName')
      },
      sortDownByName() {
        this.$store.dispatch('sortDownByName')
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
