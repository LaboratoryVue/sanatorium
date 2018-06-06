<template>
  <a href="#" class="list-group-item list-group-item-action">
    {{ item.meta.name }}
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
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
