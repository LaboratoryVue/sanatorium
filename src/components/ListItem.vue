<template>
  <section>
    <a @click.prevent="onSelect()" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
      {{ item.meta.name }}
      <span class="badge badge-info badge-pill">
        {{ item.meta.star }}
      </span>
    </a>
    <ListItemDetail v-show="item.show" :item="item" />
  </section>
</template>

<script>
  import ListItemDetail from './ListItemDetail.vue'
  export default {
    name: 'ListItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      onSelect() {
        this.item.show = !this.item.show
      }
    },
    components: {
      ListItemDetail
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
