<template>
  <div class="offer-order px-2 py-3">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(addMessage)">
        <b-form-select :options="services" v-model="selectedService" text-field="title" value-field="code" size="sm" class="mb-2"></b-form-select>
        <validation-provider name="Price" rules="required" v-slot="validationContext">
          <b-input type="number" v-model="price" placeholder="Price" :state="getValidationState(validationContext)"></b-input>
          <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
        </validation-provider>
        <b-form-datepicker id="example-datepicker" v-model="dueDate" class="my-2"></b-form-datepicker>
        <b-row align-h="center" class="mt-3">
          <b-btn size="sm" variant="success" class="mx-auto text-white" @click="sendOffer">
            <b-spinner small v-if="sendingOffer"></b-spinner>
            Send
          </b-btn>
        </b-row>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import services from '@/assets/json/services.json'
import { DB } from '@/firebase'
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  props:{
    selectedUser: Object
  },
  data(){
    return {
      price: '',
      services: services,
      dueDate: '',
      selectedService: null,
      sendingOffer: false,
      currency: 'USD'
    }
  },
  created(){
    this.selectedService = this.services[0].code
  },
  computed:{
    ...mapGetters('AUTH', ['user']),
    uid(){
      return this.user.id
    },
  },
  methods:{
    async sendOffer(){
      this.sendingOffer = true
      try{
        let service = this.services.find(s => s.code == this.selectedService)
        let obj = {
          text: service.title,
          serviceCode: this.selectedService,
          price: parseFloat(this.price),
          currency: this.currency,
          msgType: 'OFFER',
          seenByUser: moment().format('X'),
          seenByManager: null,
          uid: this.uid,
          createdAt: moment().format('X'),
          dueDate: moment(this.dueDate).format('X')
        }
        await DB.collection('user').doc(this.selectedUser.info.uid).collection('messages').add(obj)
        this.$emit('done')
      }catch(e){
        console.log(e)
      }
      this.sendingOffer = false
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
}
</script>

<style>

</style>