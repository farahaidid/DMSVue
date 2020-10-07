<template>
   <div>
      <!-- Contact Us list widget -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Contact Us</h4>
      </div>
      <ul class="list-unstyled">
         <li v-for="(contactUs,i) of contact.data" :key="i" class="mb-4">
            <div class="d-flex">
               <span class="d-inline-block chk-icon-head"> <i :class="contactUs.img" class="fa-2x text-warning"></i></span>
               <div class="px-3 chk-icon-desp">
                  <h5 class="text-warning mb-1">{{contactUs.title}}</h5>
                  <a href="javascript:void(0)" class="text-dark font-20">{{contactUs.value}}</a>
               </div>
            </div>
         </li>
      </ul>
   </div>
</template>
<script>
   import contact from 'Components/data/contact-us-widgets.json'
   export default{
      data(){
         return{
            contact
         }         
      }
   }
</script>