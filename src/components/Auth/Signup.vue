<template>
  <div class="signup-component">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(signup)">
        <b-row class="mx-0">
          <b-col cols="12" class="px-1">
            <validation-provider name="Name" rules="required" v-slot="validationContext">
              <b-input v-model="fullName" placeholder="Full Name" :state="getValidationState(validationContext)"></b-input>
              <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </b-col>
          <b-col cols="12" class="px-1">
            <validation-provider name="Email" rules="required|email" v-slot="validationContext">
              <b-input class="mt-2" v-model="email" placeholder="Email" :state="getValidationState(validationContext)"></b-input>
              <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </b-col>
          <b-col cols="12" class="px-1">
            <validation-provider name="Password" rules="required" v-slot="validationContext">
              <b-input class="mt-2" v-model="password" type="password" placeholder="Password" :state="getValidationState(validationContext)"></b-input>
              <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </b-col>
          <b-col cols="12" class="px-1">
            <validation-provider name="Retype Password" rules="required|confirmed:Password" v-slot="validationContext">
              <b-input class="mt-2" v-model="retypePassword" type="password" placeholder="Confirm Password" :state="getValidationState(validationContext)"></b-input>
              <b-form-invalid-feedback class="text-left" id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </b-col>
        </b-row>

        <p v-if="msgType" :class="['ml-1 mt-2 msg text-' + msgType]">{{msg}}</p>
      
        <b-row align-h="center" class="mt-3">
          <b-btn type="submit" class="" variant="dark" @click="signup" :disabled="submitting" size="sm">
            <b-spinner small v-if="submitting"></b-spinner>
            Signup
          </b-btn>
        </b-row>
        <b-row align-h="center" class="mt-3">
          <p>
            <span class="mr-2">Already have an account?</span>
            <span class="text-primary cursor-pointer" @click="emitLogin">Login</span>
          </p>
        </b-row>

      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import { FIREBASE } from '@/firebase'
export default {
  data(){
    return {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',

      submitting: false,
      msg: '',
      msgType: null
    }
  },
  methods:{
    ...mapActions('AUTH', ['CREATE_NEW_USER']),
    emitLogin(){
      this.$emit('login')
    },
    async signup(){
      this.submitting = true
      this.msgType = null
      try{
        let result = await FIREBASE.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(result)
        let user = Object.assign({},{
          uid: result.user.uid,
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          createdAt: moment().format('X')
        })
        await this.CREATE_NEW_USER(user)
        this.resetForm()
        this.msgType = 'success'
        this.msg = 'Signup successful! You can now login'
        setTimeout(()=>{
          this.emitLogin()
        }, 3000)
      }catch(e){
        console.log('signup-error', e)
        this.msgType = 'danger'
        this.msg = e.message
      }
      this.submitting = false
    },
    resetForm(){
      this.fullName = ''
      this.email = ''
      this.password = ''
      this.retypePassword = ''
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