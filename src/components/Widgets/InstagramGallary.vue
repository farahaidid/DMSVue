<template>
   <div>
      <!-- Instagram Gallery -->
      <div class="instagram-gallery">
         <div class="mb-4">
            <h4 class="sidebar-title mb-3">Instagram</h4>
         </div>
         <div class="row">
               <div 
                  class="col-xs-4 col-sm-4 col-md-4 mb-4" 
                  v-for="(image,i) of InstagramImages.data.slice(0,6)" 
                  :key="i"
               >
                  <div class="zoom-in">
                  <img :src="image.image_path" class="w-100 h-100 rounded" width="100" height="100" />
               </div>
               </div>
         </div>
      </div>
   </div>
</template>
<script>
   import InstagramImages from 'Components/data/instagram.json'
   export default{
      data(){
         return{
            InstagramImages
         }         
      }
   }
</script>