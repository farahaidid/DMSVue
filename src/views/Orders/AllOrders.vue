<template>
  <div class="all-orders">
    <orders />
  </div>
</template>

<script>
import Orders from '@/components/Order/Orders'
export default {
  components: {
    Orders
  },
}
</script>

<style lang="sass" scoped>
.all-orders
  margin-top: 67px
  height: calc(100vh - 70px)
</style>