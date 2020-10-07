<template>
   <div>
      <!-- Testimonial Layout -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Testimonials 2</h4>
      </div>
      <div 
         v-for="(testimonial,i) of testimonial2Content.data.slice(0,3)" 
         :key="i"
         class="media mb-3 p-3 card-shadow"
         :class="testimonial.classes.bgClass"
         >
         <img class="d-flex mr-3 rounded-circle shadow-md" :src="testimonial.avatar" alt="Generic placeholder image" height="50" width="50">
         <div class="media-body">
            <h5 class="fw-700 text-white">{{testimonial.user_name}}</h5>
            <p class="font-italic text-justify m-0"> {{testimonial.content}} </p>
         </div>
      </div>
   </div>
</template>
<script>
   import testimonial2Content from 'Components/data/testimonial.json'
   export default{
      data(){
         return{
            testimonial2Content
         }         
      }
   }
</script>