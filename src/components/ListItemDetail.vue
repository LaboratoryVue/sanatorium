<template>
  <div class="card mb-2">
    <img class="card-img-top" :src="item.meta.thumbnail" :alt="item.meta.slug">
    <div class="card-body">
      <h5 class="card-title">
        {{ item.meta.name }}
      </h5>
      <p class="card-text">
        {{ item.meta.adress }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemDetail',
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
