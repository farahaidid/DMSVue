<template>
   <div>
      <!-- Contact Us 2 Widget -->
      <div class="mb-4">
      <h4 class="sidebar-title mb-3">Contact Us 2</h4>
      </div>
      <div class="mb-4">
         <div class="google-maps">
            <div class="mapouter">
               <div class="gmap_canvas">
                 <gmap-map :center="center" :zoom="9" style="width: '300px'; height: 200px" class="gmap_canvas">
                     <gmap-marker 
                        :position="markers.position" 
                        
                        :clickable="true"
                        :draggable="false"
                        @click="center=markers.position"
                     >
                     </gmap-marker>
                  </gmap-map>  
               </div>
            </div>
         </div>
      </div>
      <ul class="list-unstyled contact-label">
      <li v-for="(contactUs,i) of contact.data" :key="i" class="d-flex justify-content-start mb-2">
            <span class="d-flex align-items-start contact-label-main">
               {{contactUs.heading}}
            </span> 
            <span class="mx-3">: </span>
            <a href="javascript:void(0)" class="d-flex align-items-start text-dark">
               {{contactUs.value}}
            </a>
      </li>
      </ul>
   </div>
</template>
<script>
   import contact from 'Components/data/contact-us-widgets.json'
   export default{
      data(){
         return{
            contact,
            center: { lat: 30.7, lng: 76.7 },
            markers: {
               position: { lat: 30.7, lng: 76.7 }
            }
         }         
      }
   }
</script>