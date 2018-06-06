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
        <button type="button" class="text-capitalize btn btn-primary mr-2">up</button>
        <button type="button" class="text-capitalize btn btn-primary">down</button>
      </div>
      <div class="col-6">
        <h4 class="mb-4">по названию объекта</h4>
        <button type="button" class="text-capitalize btn btn-primary mr-2">up</button>
        <button type="button" class="text-capitalize btn btn-primary mr-2">down</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StartPage />
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
