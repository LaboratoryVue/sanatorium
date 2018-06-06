<template>
  <a @click="onSelect()" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    {{ item.meta.name }}
    <span class="badge badge-info badge-pill">
      {{ item.meta.star }}
    </span>
  </a>
</template>

<script>
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
      this.$store.dispatch('selectUniqueItem', this.item.uid)
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
