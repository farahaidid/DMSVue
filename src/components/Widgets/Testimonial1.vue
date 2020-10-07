<template>
   <div>
      <!-- Testimonial Layout -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Testimonials</h4>
      </div>
      <div 
         class="media border-bottom mb-3" 
         v-for="(testimonial,i) of testimonialContent.data.slice(0,3)" :key="i">
         <img class="d-flex mr-3 rounded-circle shadow-md" :src="testimonial.avatar" alt="Generic placeholder image" height="72" width="72">
         <div class="media-body">
            <h5 class="fw-700">{{testimonial.user_name}}</h5>
            <p class="font-italic"> {{testimonial.content}} </p>
         </div>
      </div>
   </div>
</template>
<script>
   import testimonialContent from 'Components/data/testimonial.json'
   export default{
      data(){
         return{
            testimonialContent
         }         
      }
   }
</script>