<template>
  <div class="message-component h-100">
    <b-row align-h="center" class="py-5" v-if="fetchingMessages">
      <b-spinner></b-spinner>
    </b-row>
    <div class="message-wrapper d-flex h-100">
      <b-list-group class="message-user-list w-25 h-100 pr-1" v-if="user.isAdmin">
        <b-list-group-item :class="['d-flex align-items-center user-card', selectedUser && selectedUser.info.uid == u.info.uid ? 'selected-user':'']" v-for="(u,uI) in users" :key="uI" @click="setSelectedUser(u)">
          <b-avatar class="mr-3" :text="u.info.fullName[0]"></b-avatar>
          <span class="mr-auto user-name">{{u.info.fullName}}</span>
          <b-badge>{{u.unreadMessages}}</b-badge>
        </b-list-group-item>
      </b-list-group>
      <div :class="['messages-with-form d-flex flex-column h-100', user.isAdmin ? 'w-75' : 'w-100']" v-if="selectedUser">
        <div class="selected-user-info bg-secondary d-flex justify-content-center py-1">
          <p class="name text-white my-0">{{selectedUser.info.fullName}}</p>
          <p class="email text-white my-0">{{selectedUser.info.email}}</p>
        </div>
        <div class="messages px-2 pt-2 pb-3">
          <div :class="['message-card mb-2 px-2', message.uid == uid ? 'ml-auto text-right right':'left']" v-for="(message, mI) in filteredMessages" :key="mI">
            <div class="offer-card pb-2" v-if="message.msgType == 'OFFER'">
              <i class="text-success">Custom Offer</i>
              <p class="text my-0">{{message.text}}</p>
              <p class="price font-weight-bold mb-1">{{message.price}} {{message.currency}}</p>
              <b-row align-h="end" class="mx-0">
                <span v-if="message.status" :class="[message.status == 'ACTIVE' ? 'text-success' : '']">{{message.status}}</span>
                <b-btn v-else size="sm" variant="success" class="text-white" :disabled="acceptingOffer" @click="acceptOffer(message)">
                  <b-spinner small v-if="acceptingOffer"></b-spinner>
                  Accept
                </b-btn>
              </b-row>
            </div>
            <span v-else>{{message.text}}</span>
          </div>
        </div>
        <div class="message-form px-2 d-flex align-items-center">
          <validation-observer ref="observer" v-slot="{ handleSubmit }" class="w-100">
            <b-form @submit.stop.prevent="handleSubmit(addMessage)" :class="[user.isAdmin ? 'w-75' : 'w-100']">
              <validation-provider name="Message" rules="required" v-slot="validationContext">
                <b-input v-model="messageTxt" placeholder="Type..." :state="getValidationState(validationContext)"></b-input>
                <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </validation-provider>
            </b-form>
          </validation-observer>
          <b-btn v-if="user.isAdmin" size="sm" @click="modal=true">Offer</b-btn>
        </div>
      </div>
    </div>
    <modal :dialog="modal" :title="'Offer an order'" @close="closeModal">
      <offer-an-order :selectedUser="selectedUser" @done="closeModal" />
    </modal>
    <modal :dialog="offerPaymentModal" :title="'Pay to confirm'" @close="closeOfferPaymentModal">
      <offer-payment :offer="selectedOffer" @done="closeOfferPaymentModal" />
    </modal>
  </div>
</template>

<script>
import { DB } from '@/firebase'
import { mapGetters } from 'vuex'
import moment from 'moment'
import Modal from '@/components/Modal/Modal'
import OfferAnOrder from '@/components/Order/OfferOrder'
import OfferPayment from '@/components/Order/OfferPayment'
export default {
  components:{
    Modal,
    OfferAnOrder,
    OfferPayment
  },
  data(){
    return {
      fetchingMessages: true,
      messages: [],

      messageTxt: '',
      sendingMessage: false,

      users: {},
      selectedUser: null,
      
      modal: false,
      acceptingOffer: false,
      selectedOffer: null,

      offerPaymentModal: false
    }
  },
  created(){
    this.fetchUsersAndMessages()
    // else this.fetchMessages(this.uid)
  },
  computed:{
    ...mapGetters('AUTH', ['user']),
    uid(){
      return this.user.id
    },
    filteredMessages(){
      if(this.selectedUser){
        return this.selectedUser.messages.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)
      }
      return []
    },
  },
  methods:{
    async acceptOffer(message){
      this.selectedOffer = message
      this.offerPaymentModal = true
    },
    closeModal(){
      this.modal = false
    },
    closeOfferPaymentModal(){
      this.offerPaymentModal = false
    },
    async addMessage(){
      if(this.sendingMessage) return
      this.sendingMessage = true
      try{
        let obj = {
          text: this.messageTxt,
          seenByUser: this.user.isAdmin ? null : moment().format('X'),
          seenByManager: this.user.isAdmin ? moment().format('X') : null,
          uid: this.uid,
          createdAt: moment().format('X')
        }
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').add(obj)
        this.messageTxt = ''
        this.$refs.observer.reset();
      }catch(e){
        console.log('adding-message-error', e)
      }
      this.sendingMessage = false
    },
    async fetchMessages(uid){
      DB.collection('user/'+uid+'/messages').onSnapshot(snapshot => {
        if(this.fetchingMessages) this.fetchingMessages = false
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log("New city: ", uid, change.doc.data());
            this.users[uid].messages.push({
              id: change.doc.id,
              ...change.doc.data()
            })
          }
          if (change.type === "modified") {
            let index = this.users[uid].messages.findIndex(m => m.id == change.doc.id)
            if(index >= 0){
              this.users[uid].messages[index] = {
                id: change.doc.id,
                ...change.doc.data()
              }
            }
          }
          if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
          }
        });
      })
      let unreadMsgsSnaps = this.user.isAdmin ? 
        await DB.collection('user').doc(uid).collection('messages').where('seenByManager', '==' , null).get()
        : await DB.collection('user').doc(uid).collection('messages').where('seenByUser', '==' , null).get()
      let unreadMsgs = unreadMsgsSnaps.docs.length
      this.users[uid].unreadMessages = unreadMsgs
    },
    async fetchUsersAndMessages(){
      if(this.user.isAdmin){
        let users = []
        users = await DB.collection('users').get()
        users.docs.forEach(doc => {
          this.users[doc.id] = {
            info:{
              uid: doc.id,
              ...doc.data()
            },
            messages: [],
            unreadMessages: 0
          }
          this.fetchMessages(doc.id)
        })
      }
      else {
        let user = await DB.collection('users').doc(this.uid).get()
        this.users[user.id] = {
          info:{
            uid: user.id,
            ...user.data()
          },
          messages: [],
          unreadMessages: 0
        }
        this.fetchMessages(user.id)
        this.setSelectedUser(this.users[user.id])
      }
    },
    async makeRead(){
      let conQ = this.user.isAdmin ? 
        DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').where('seenByManager','==', null)
        : DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').where('seenByUser','==', null)
      let msgs = await conQ.get(snaps => {
        snaps.forEach(doc => {
          let obj = this.user.isAdmin ? {
            'seenByManager': moment().format('X')
          }: {
            seenByUser: moment().format('X')
          }
          DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').doc(doc.id).update(obj)
        })
      })
    },
    setSelectedUser(u){
      this.selectedUser = u
      this.makeRead()
      setTimeout(()=>{
        let messageBody = document.querySelector('.messages')
        messageBody.scrollTop = messageBody.scrollHeight
      }, 200)
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
}
</script>

<style lang="sass" scoped>
.messages
  height: calc(100% - 50px)
.message-form
  height: 60px
  background-color: #F9F9F9

.message-card
  max-width: 85%
  width: max-content
  background-color: #ebebeb
  &.left
    border-top-right-radius: 5px
    border-bottom-right-radius: 5px
  &.right
    border-top-left-radius: 5px
    border-bottom-left-radius: 5px

.user-card
  border-radius: 0 !important
  border: unset
  border-bottom: 2px solid #ebebeb
  &:last-child
    border-bottom: 1px solid #ebebeb !important
  &.selected-user
    background-color: #F9F9F9
    border-right: 5px solid #37A004
  .user-name
    color: black

.message-user-list , .messages
  overflow-y: auto

.offer-card
  i
    font-size: 14px
  .text
    font-size: 16px
  .price
    font-size: 16px
</style>