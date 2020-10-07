<template>
   <div>
      <PageTitle
         headerTitle="Thousands of Happy Users"
         headerSubTitle="Do you have any questions or need our help?"
      >
      </PageTitle>
      <div class="testimonial-wrapper section-gap">
        
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-6" v-for="(user,index) of testimonial.data.slice(0,6)" :key="index">
                  <div >
                     <div class="card border-0 mb-4 card-shadow">
                        <div class="card-body p-4">
                           <img :src="user.avatar" class="rounded-circle shadow-md mb-3" width="80" height="80" alt="testimonial user thumb" />
                           <div class="mb-2">
                              <h4 class="mb-2 title">{{user.heading}}</h4>
                              <span class="font-weight-normal">{{user.user_name}}</span>
                           </div>
                           <p>{{user.content}}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import testimonial from 'Components/data/testimonial.json'

   export default {
      data(){
         return{
            testimonial
         }
      }
   }
</script>
