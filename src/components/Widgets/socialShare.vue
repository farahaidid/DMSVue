<template>
<div>
   <div class="mb-4">
      <h4 class="sidebar-title mb-3">Social Share </h4>
   </div>
   <router-link 
      :to="socialContent.url" 
      v-for="(socialContent,i) of socialShare.data.slice(0,4)" 
      :key="i" 
      class="d-flex justify-content-between mb-2 btn btn-block text-white btn-lg"
       :class="socialContent.bg_color"
      >      
      <span class="d-flex align-items-center">
         <i class="mr-3 fab " :class="socialContent.icon"></i>
         <span> {{socialContent.title}} </span>
      </span>
      <span class="d-flex align-items-center bg-white text-dark px-2">
         {{ socialContent.value }}
      </span>
   </router-link>
</div>
</template>
<script>
   import socialShare from 'Components/data/social-share.json'
   export default{
      data(){
         return{
            socialShare
         }         
      }
   }
</script>