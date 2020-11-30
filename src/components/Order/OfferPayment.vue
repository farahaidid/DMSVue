<template>
  <div class="offer-payment px-2 py-2">
    <h4>{{offer.text}}</h4>
    <p>Price: <strong>{{offer.price}} {{offer.currency}}</strong></p>

    <p v-if="initializingPaymentGateway">
      <b-spinner small variant="success"></b-spinner>
      Initializing Payment...
    </p>

    <div id="paypal-button-container" class="mt-3 mx-auto"></div>

  </div>
</template>

<script>
import { DB } from '@/firebase'
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
  props:{
    offer: Object
  },
  data(){
    return {
      clientID: 'sb',
      initializingPaymentGateway: true,
    }
  },
  mounted(){
    this.initPaymentMethod()
  },
  computed:{
    ...mapGetters('AUTH', ['user']),
    uid(){
      return this.user.id
    },
  },
  methods:{
    initPaypal(){
      let _this = this
      paypal.Buttons({
        createOrder: _this.createPaypalOrder,
        onApprove: _this.onPaypalApproved
      }).render('#paypal-button-container');
    },
    removePaypal(){
      let paypalBtnDiv = document.getElementById("paypal-button-container")
      if(paypalBtnDiv){
        paypalBtnDiv.innerHTML = ""
      }
    },
    createPaypalOrder(data, actions){
      let _this = this
      
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: _this.offer.price.toString(),
            currency_code: _this.offer.currency
          }
        }]
      });
    },
    onPaypalApproved(data, actions){
      let _this = this
      return actions.order.capture().then(async function(details) {
        return await _this.createOrder(details)
      });
    },
    async createOrder(details){
      try{
        let obj = {
          code: this.offer.serviceCode,
          createdAt: moment().format('X'),
          price: this.offer.price,
          currency: this.offer.currency,
          paid: this.offer.price,
          due: 0,
          discount: 0,
          status: 'ACTIVE',
          offerId: this.offer.id,
          paypal: details
        }
        await DB.collection('user').doc(this.uid).collection('orders').add(obj)
        await DB.collection('user').doc(this.uid).collection('messages').doc(this.offer.id).update({
          status: 'ACTIVE'
        })
        this.$emit('done')
      }catch(e){
        console.log(e)
      }
    },
    async initPaymentMethod(){
      this.initializingPaymentGateway = true
      this.loadScript("https://www.paypal.com/sdk/js?client-id="+this.clientID+"&currency=" + this.offer.currency, this.currencyChangeHandler)
    },
    currencyChangeHandler(){
      this.initPaypal()
      this.initializingPaymentGateway = false
    },
    loadScript(src, callback) {
      var s,r,t;
      r = false;
      s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
      s.onload = s.onreadystatechange = function() {
        if ( !r && (!this.readyState || this.readyState == 'complete') ){
          r = true;
          callback();
        }
      };
      t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);
    },
  },
}
</script>

<style>

</style>