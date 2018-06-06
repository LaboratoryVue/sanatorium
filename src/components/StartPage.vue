<template>
  <div class="list-group">
    <ListItem v-for="item in items" :item="item" :key="item.uid" />
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'StartPage',
  components: {
    ListItem
  },
  computed: {
    items () {
      return this.$store.getters.getItems
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
