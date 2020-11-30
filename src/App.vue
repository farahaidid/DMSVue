<template>
  <div id="app" class="v-content__wrap">
    <router-view/>
    <login-modal />
  </div>
</template>

<script>
import LoginModal from '@/components/Auth/LoginModal'
export default {
  components:{
    LoginModal
  },
}
</script>

<style>

</style>
