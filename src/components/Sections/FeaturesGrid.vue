<template>
   <div class="feature-work section-gap bg-light">
      <div class="container" v-if="features.data.features_work">
         <div class="section-title-wrapper mb-5">
            <div class="row">
               <div class="col-sm-12 col-md-6 mx-auto text-center">
                  <h2>Design For You</h2>
                  <p class="lead">
                     This is the paragraph where you can write more details about your product.
                  </p>
               </div>
            </div>
         </div>
         <div class="row col-space">
            <div class="col-sm-12 col-md-6 col-lg-4" v-for="(content,index) of features.data.features_work" :key="index">
               <div class="card-line-box  p-4">
                  <div class="mb-4">
                     <img :src="content.image_path" class="img-fluid">
                  </div>
                  <h4 class="mb-3">{{content.heading}}</h4>
                  <p class="mb-0">{{content.content}}</p>
               </div>
            </div>
         </div>
      </div> 
   </div>
</template>
<script>
   import features from 'Components/data/features.json'
   export default{
      data(){
         return{
            features
         }         
      }
   }
</script>