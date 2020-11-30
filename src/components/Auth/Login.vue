<template>
  <div class="login-component">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(login)">
        <validation-provider name="Email" rules="required|email" v-slot="validationContext">
          <b-input v-model="email" placeholder="Email" :state="getValidationState(validationContext)"></b-input>
          <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
        </validation-provider>
        <validation-provider name="Password" rules="required" v-slot="validationContext">
          <b-input class="mt-2" v-model="password" type="password" placeholder="Password" :state="getValidationState(validationContext)"></b-input>
          <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
        </validation-provider>

        <p v-if="msgType" :class="['ml-1 mt-2 msg text-' + msgType]">{{msg}}</p>
        
        <b-row align-h="center" class="mt-3">
          <b-btn class="" variant="dark" @click="login" :disabled="submitting" size="sm">
            <b-spinner small v-if="submitting"></b-spinner>
            Login
          </b-btn>
        </b-row>
        <b-row align-h="center" class="mt-3">
          <p>
            <span class="mr-2">Don't have an account?</span>
            <span class="text-primary cursor-pointer" @click="emitSignup">Signup</span>
          </p>
        </b-row>

      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { FIREBASE } from '@/firebase'
export default {
  data(){
    return {
      email: 'test@test.com',
      password: '123456',

      submitting: false,
      msg: '',
      msgType: null
    }
  },
  methods:{
    ...mapMutations('AUTH', ['SET_FIREBASE_USER']),
    ...mapActions('AUTH', ['FETCH_USER_DETAILS']),
    emitSignup(){
      this.$emit('signup')
    },
    async login(){
      this.submitting = true
      try{
        let result = await FIREBASE.auth().signInWithEmailAndPassword(this.email, this.password)
        let user = await this.FETCH_USER_DETAILS()
        this.msgType = 'success'
        this.msg = 'Login successful'
        let obj = {...user}
        delete obj.password
        this.SET_FIREBASE_USER(obj)
        this.$emit('done')
      }catch(e){
        console.log('login-error', e)
        this.msgType = 'danger'
        this.msg = e.message
      }
      this.submitting = false
    },
    resetForm(){
      this.email = ''
      this.password = ''
      this.$refs.observer.reset();
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
}
</script>

<style lang="sass" scoped>
.msg
  font-size: 14px
</style>