<template>
  <div class="live-chat-page">
    <message :liveChatMode="true" />
  </div>
</template>

<script>
import Message from '@/components/Message/Message'
export default {
  components: {
    Message
  },
}
</script>

<style lang="sass" scoped>
.live-chat-page
  margin-top: 67px
  height: calc(100vh - 70px)
</style>