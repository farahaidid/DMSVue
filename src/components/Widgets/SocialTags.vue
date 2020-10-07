<template>
   <div>
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Social Share </h4>
      </div>
      <a 
         v-for="(social,i) of Socials.data"
         :key="i"
         :href="social.url" 
         class="btn btn-lg text-white mx-1 mb-2"
         :class="social.bg_color"
         >
         <i class="fa-lg fab " :class="social.icon"></i>
      </a>
   </div>
</template>
<script>
   import Socials from 'Components/data/social-share.json'
   export default{
      data(){
         return{
            Socials
         }         
      }
   }
</script>