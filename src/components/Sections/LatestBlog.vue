<template>
   <!-- Posts grid -->
   <div class="row">
      <div class="col-sm-12 col-md-4 col-xl-4" v-for="content of postGridContent.data">   
         <div class="card border-0 border-rad m-0">
            <a href="/blog-detail"><img class="border-rad-top img-fluid w-100" :src="content.image_path" alt="Card image cap" width="370" height="253" /></a>
            <div class="card-body px-4 pt-4 border-rad-bottom">
               <h4 class="card-title mb-2"><a href="/blog-detail">{{content.title}}</a></h4>
               <p class="card-text mb-4">{{content.content}}</p>
               <div class="card-footer pt-2 p-0">
                  <div class="d-flex justify-content-between">
                     <div class="d-flex align-content-start">
                        <a href="javascript:void(0);" class="text-muted">
                           <i class="mr-1  fa" :class="content.user_icon"></i>
                           <span class="font-sm"> {{content.user_name}}</span>
                        </a>
                     </div>
                     <div class="d-flex align-content-end">
                        <a href="javascript:void(0);" class="text-muted">
                           <i class="fa fa-calendar-o mr-2"></i>
                           <span class="font-sm text-capitalize">{{content.date}}</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import postGridContent from 'Components/data/posts.json'

   export default {
      data(){
         return{
            postGridContent
         }
      }
   }
</script>
