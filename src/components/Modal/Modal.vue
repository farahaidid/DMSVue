<template>
  <div class="mod-dialog-div">
    <b-modal v-model="dialog" hide-footer hide-header centered content-class="mod-dialog-component">
      <div class="header-content bg-dark">
        <b-icon class="close-icon text-white" font-scale="1.3" @click="close" icon="x-circle-fill"></b-icon>
        <p class="my-0 text-center white--text font-weight-bold">{{title}}</p>
      </div>
      <slot />
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    title: String
  },
  data(){
    return{
      opDialog: false
    }
  },
  created(){
    this.opDialog = this.dialog || false
  },
  watch:{
    dialog(v){
      this.opDialog = v
    }
  },
  methods:{
    close(){
      this.opDialog = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass" scoped>
::v-deep .mod-dialog-component
  border-radius: 0 !important
  border: unset !important
  .modal-body
    padding: 0 !important
.modal-card
  padding: 0
  .card-body
    padding: 0

.header-content
  position: relative
  .close-icon
    position: absolute
    right: 4px
    top: 3px
</style>