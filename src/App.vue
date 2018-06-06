<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <StartPage msg="Welcome to Your Vue.js App"/>
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
