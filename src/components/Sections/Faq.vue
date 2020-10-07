<template>
   <div class="frequently-section section-gap bg-light">
      <div class="container" v-if="support.data.support_questions">
         <div class="section-title-wrapper mb-5">
            <div class="row">
               <div class="col-sm-12 col-md-9 mx-auto text-center">
                  <h2 class="mb-3"> Frequently Asked Questions </h2>
                  <p>Don’t worry, we are always here to assist you.</p>
               </div>
            </div>
         </div>
         <div class="accordion-wrapper">
            <div id="accordion" role="tablist">
               <div class="simple-line-accordion">
                  <div class="card card-white bg-light mb-2" v-for="support of support.data.support_questions" :key="support.collapse_id">
                     <div class="card-header" role="tab">
                        <h5 class="mb-0">
                           <a class="collapsed accordion-toggle" data-toggle="collapse" :href="'#'+support.collapse_id" aria-expanded="true" aria-controls="collapseTwo">
                              {{support.question}}
                           </a>
                        </h5>
                     </div>
                     <div :id="support.collapse_id" class="collapse" role="tabpanel" data-parent="#accordion">
                        <div class="card-body">
                           {{support.answer}}
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