<template>
  <div class="message-page">
    <message />
  </div>
</template>

<script>
import Message from '@/components/Message/Message'
export default {
  components:{
    Message
  },
}
</script>

<style lang="sass" scoped>
.message-page
  margin-top: 67px
  height: calc(100vh - 70px)
</style>