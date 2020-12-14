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
      <div :class="['orders-with-form d-flex flex-column h-100', user.isAdmin ? 'w-75' : 'w-100']" v-if="selectedUser">
        <div class="selected-user-info bg-secondary d-flex justify-content-center py-1">
          <p class="name text-white my-0">{{selectedUser.info.fullName}}</p>
          <p class="email text-white my-0">{{selectedUser.info.email}}</p>
        </div>
        <div class="orders px-2 pt-2 pb-3">
          <!-- TABLE -->
          <h3>Orders</h3>
          <b-row class="mb-4">
            <b-col lg="6" class="my-1">
              <b-form-group class="mb-0" label="Sort" label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="sortBySelect">
                <b-input-group size="sm">
                  <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                    <template #first>
                      <option value="">-- none --</option>
                    </template>
                  </b-form-select>
                  <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                    <option :value="false">Asc</option>
                    <option :value="true">Desc</option>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
              <b-form-group class="mb-0" label="Filter" label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="filterInput">
                <b-input-group size="sm">
                  <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>

            <b-col sm="5" md="6" class="my-1">
              <b-form-group class="mb-0" label="Per page" label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="right" label-size="sm" label-for="perPageSelect">
                <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-table
            show-empty
            small
            stacked="md"
            :items="selectedUser.orders"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
          >
            <template #cell(code)="row">
              {{ getServiceName(row.item.code) }}
            </template>

            <template #cell(paid)="row">
              {{row.item.paid}} {{row.item.currency}}
            </template>
            <template #cell(createdAt)="row">
              {{formatDateTime(row.item.createdAt)}}
            </template>
            <template #cell(actions)="row">
              <b-spinner small v-if="takingAction && selectedOrder.id == row.item.id"></b-spinner>
              <div v-else>
                <span v-if="row.item.cancelRequest && !user.isAdmin">SENT CANCEL REQUEST</span>
                <b-btn @click="declineCancellation(row.item)" size="sm" class="mr-2" v-if="user.isAdmin && row.item.cancelRequest && row.item.status == 'ACTIVE'">Decline</b-btn>
                <b-btn @click="cancelOrder(row.item)" size="sm" variant="danger" v-if="user.isAdmin && row.item.cancelRequest && row.item.status == 'ACTIVE'">Accept Cancellation</b-btn>
                <b-icon v-if="!row.item.cancelRequest && user.isAdmin && row.item.status == 'ACTIVE'" scale="1.5" icon="check2-all" variant="success" class="mr-2" @click="makeDone(row.item)"></b-icon>
                <b-icon v-if="!row.item.cancelRequest && row.item.status == 'ACTIVE'" scale="1.5" icon="x" variant="danger" class="" @click="cancelOrder(row.item)"></b-icon>
              </div>
            </template>
          </b-table>
          <b-row align-h="center">
            <b-pagination class="my-0" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"></b-pagination>
          </b-row>
        </div>
      </div>
    </div>
    <modal :dialog="modal" :title="'Offer an order'" @close="closeModal">
      <offer-an-order :selectedUser="selectedUser" @done="closeModal" />
    </modal>
  </div>
</template>

<script>
import { DB } from '@/firebase'
import { mapGetters } from 'vuex'
import moment from 'moment'
import Modal from '@/components/Modal/Modal'
import OfferAnOrder from '@/components/Order/OfferOrder'
import services from '@/assets/json/services'
export default {
  components:{
    Modal,
    OfferAnOrder,
  },
  data(){
    return {
      fetchingMessages: true,
      orders: [],

      messageTxt: '',
      sendingMessage: false,

      users: {},
      selectedUser: null,
      
      modal: false,
      acceptingOffer: false,
      selectedOffer: null,

      offerPaymentModal: false,

      fields: [
        { key: 'code', label: 'Service', sortable: true },
        { key: 'paid', label: 'Price', sortable: true},
        { key: 'status', label: 'Status', sortable: true, },
        { key: 'createdAt', label: 'Date', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: '', sortable: false, }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,

      takingAction: false,
      selectedOrder: null
    }
  },
  created(){
    this.fetchUsersAndOrders()
    // else this.fetchOrders(this.uid)
  },
  computed:{
    ...mapGetters('AUTH', ['user']),
    uid(){
      return this.user.id
    },
    filteredOrders(){
      if(this.selectedUser){
        return this.selectedUser.orders.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)
      }
      return []
    },
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    },
  },
  methods:{
    async declineCancellation(order){
      if(this.takingAction) return
      this.selectedOrder = order
      this.takingAction = true
      try{
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').doc(order.id).update({
          cancelRequest: null
        })
        let i = this.selectedUser.orders.findIndex(o => o.id == order.id)
        this.selectedUser.orders[i].cancelRequest = null
      }catch(e){
        console.log(e)
      }
      this.takingAction = false
      this.selectedOrder = null
    },
    async makeDone(order){
      if(this.takingAction) return
      this.selectedOrder = order
      this.takingAction = true
      try{
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').doc(order.id).update({
          status: 'DONE',
          doneAt: moment().format('X')
        })
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').doc(order.offerId).update({
          status: 'DONE',
          doneAt: moment().format('X')
        })
        let i = this.selectedUser.orders.findIndex(o => o.id == order.id)
        this.selectedUser.orders[i].status = 'DONE'
        this.selectedUser.orders = [...this.selectedUser.orders]
      }catch(e){
        console.log(e)
      }
      this.takingAction = false
      this.selectedOrder = null
    },
    async cancelOrder(order){
      if(this.takingAction) return
      this.selectedOrder = order
      this.takingAction = true
      try{
        if(this.user.isAdmin){
          await DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').doc(order.id).update({
            status: 'CANCELLED',
            cancelledAt: moment().format('X'),
            cancelRequest: null
          })
          await DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').doc(order.offerId).update({
            status: 'CANCELLED',
            cancelledAt: moment().format('X')
          })
        }else{
          await DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').doc(order.id).update({
            cancelRequest: {
              status: 'PENDING',
              requestedAt: moment().format('X')
            },
          })
        }
        let i = this.selectedUser.orders.findIndex(o => o.id == order.id)
        if(this.user.isAdmin) this.selectedUser.orders[i].status = 'CANCELLED'
        else{
          this.selectedUser.orders[i].cancelRequest = {
            status: 'PENDING',
            requestedAt: moment().format('X')
          }
        }
        this.selectedUser.orders = [...this.selectedUser.orders]
      }catch(e){
        console.log(e)
      }
      this.takingAction = false
      this.selectedOrder = null
    },
    getServiceName(code){
      try{
        let title = (services.find(s => s.code == code)).title
        return title
      }catch(e){
        return 'Untitled'
      }
    },
    formatDateTime(d){
      let format = 'YYYY-MM-DD h:m A'
      let dt = moment(d * 1000).format(format)
      if(moment(d * 1000).isValid()) return dt
      return ''
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
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
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').add(obj)
        this.messageTxt = ''
        this.$refs.observer.reset();
      }catch(e){
        console.log('adding-message-error', e)
      }
      this.sendingMessage = false
    },
    async fetchOrders(uid){
      DB.collection('user/'+uid+'/orders').onSnapshot(snapshot => {
        if(this.fetchingMessages) this.fetchingMessages = false
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log("New city: ", uid, change.doc.data());
            this.users[uid].orders.push({
              id: change.doc.id,
              uid,
              ...change.doc.data()
            })
          }
          if (change.type === "modified") {
            let index = this.users[uid].orders.findIndex(m => m.id == change.doc.id)
            if(index >= 0){
              this.users[uid].orders[index] = {
                id: change.doc.id,
                uid,
                ...change.doc.data()
              }
            }
          }
          if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
          }
        });
        if(this.selectedUser) this.selectedUser.orders = [...this.selectedUser.orders]
        this.$forceUpdate()
      })
      let unreadMsgsSnaps = this.user.isAdmin ? 
        await DB.collection('user').doc(uid).collection('orders').where('seenByManager', '==' , null).get()
        : await DB.collection('user').doc(uid).collection('orders').where('seenByUser', '==' , null).get()
      let unreadMsgs = unreadMsgsSnaps.docs.length
      this.users[uid].unreadMessages = unreadMsgs
    },
    async fetchUsersAndOrders(){
      if(this.user.isAdmin){
        let users = []
        users = await DB.collection('users').get()
        users.docs.forEach(doc => {
          this.users[doc.id] = {
            info:{
              uid: doc.id,
              ...doc.data()
            },
            orders: [],
            unreadMessages: 0
          }
          this.fetchOrders(doc.id)
        })
      }
      else {
        let user = await DB.collection('users').doc(this.uid).get()
        this.users[user.id] = {
          info:{
            uid: user.id,
            ...user.data()
          },
          orders: [],
          unreadMessages: 0
        }
        this.fetchOrders(user.id)
        this.setSelectedUser(this.users[user.id])
      }
    },
    async makeRead(){
      let conQ = this.user.isAdmin ? 
        DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').where('seenByManager','==', null)
        : DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').where('seenByUser','==', null)
      let msgs = await conQ.get(snaps => {
        snaps.forEach(doc => {
          let obj = this.user.isAdmin ? {
            'seenByManager': moment().format('X')
          }: {
            seenByUser: moment().format('X')
          }
          DB.collection('user').doc(this.selectedUser.info.uid).collection('orders').doc(doc.id).update(obj)
        })
      })
    },
    setSelectedUser(u){
      this.selectedUser = u
      this.makeRead()
      setTimeout(()=>{
        let messageBody = document.querySelector('.orders')
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
.orders
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

.message-user-list , .orders
  overflow-y: auto

.offer-card
  i
    font-size: 14px
  .text
    font-size: 16px
  .price
    font-size: 16px
</style>