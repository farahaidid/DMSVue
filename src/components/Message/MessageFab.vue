<template>
  <div class="message-fab">
    <div class="w-100 bg-primary d-flex justify-content-between align-items-center px-2" v-if="showMessage">
      <p class="mb-0">Live Chat</p>
      <b-icon icon="x" scale="1.5" class="cursor-pointer" variant="light" @click="toggleMessagePopup"></b-icon>
    </div>
    <div class="message-pop" v-if="showMessage">
      <b-card class="message-card">
        <b-card-text class="p-0 h-100">
          <message />
        </b-card-text>
      </b-card>
    </div>
    <b-btn size='lg' variant="primary" class="msg-btn" @click="toggleMessagePopup">
      <b-icon icon="chat-left-dots"></b-icon>
    </b-btn>
  </div>
</template>

<script>
import Message from '@/components/Message/Message'
export default {
  components:{
    Message
  },
  data(){
    return {
      showMessage: false
    }
  },
  methods:{
    toggleMessagePopup(){
      this.showMessage = !this.showMessage
    },
  },
}
</script>

<style lang="sass" scoped>
.message-fab
  position: fixed
  bottom: 20px
  right: 10px
  display: flex
  flex-flow: column
  align-items: flex-end

  .msg-btn
    margin-top: 10px
    width: 70px
    height: 70px
    border-radius: 50%

  .message-pop
    width: 95vw
    max-width: 300px
    height: 300px
    overflow: auto

    .message-card
      border: none
      height: 100%
      .card-body
        padding: 0
</style>