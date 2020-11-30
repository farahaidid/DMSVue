<template>
  <div class="login-modal-component">
    <modal :dialog="modal" :title="tab == LOGIN_TAB ? 'Login' : 'Signup'" @close="closeModal">
      <login class="px-2 pt-3 pb-2" v-if="tab == LOGIN_TAB" @signup="switchTab(SIGNUP_TAB)" @done="closeModal" />
      <signup class="px-2 pt-3 pb-2" v-if="tab == SIGNUP_TAB" @login="switchTab(LOGIN_TAB)" @done="closeModal" />
    </modal>
  </div>
</template>

<script>
import Login from '@/components/Auth/Login'
import Signup from '@/components/Auth/Signup'
import Modal from '@/components/Modal/Modal'
import EventBus from '@/plugins/eventBus'
export default {
  components:{
    Login,
    Modal,
    Signup
  },
  data : () => ({
    modal: false,
    tab: 'LOGIN',
    LOGIN_TAB: 'LOGIN',
    SIGNUP_TAB: 'SIGNUP'
  }),
  created(){
    EventBus.$on('open-login', () => {
      console.log('aaa', this.modal)
      this.modal = true
    })
  },
  methods:{
    closeModal(){
      this.modal = false
    },
    switchTab(tab){
      this.tab = tab
    },
  },

}
</script>

<style>

</style>