<template>
   <div class="support-card mb-5">
      <div class="container" v-if="support.data.supports">
         <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 mb-3" v-for="(support,index) of support.data.supports" :key="index">
               <div class="card card-shadow border-rad">
                  <div class="card-body p-4">
                     <div class="d-flex justify-content-between">
                        <div class="flex-column mr-5">
                           <h5> {{support.heading}} </h5>
                           <p class=""> {{support.content}} </p>
                           <a href="javascript:void(0)" class="btn btn-primary"> {{support.button_content}}</a>
                        </div>
                        <div class="d-flex align-items-center d-xs-none">
                           <img :src="support.image_path" />
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
   import support from 'Components/data/support.json'
   export default{
      data(){
         return{
            support
         }
      }
   }
</script>