<template>
<!-- Header of blog sidebar and blog no sidebar page -->
<div class="card text-white text-center border-0 blog-banner-detail" >
   <div class="blog-detail-thumb" style="background-image: url('/static/img/blog-detail.jpg')"></div>
   <div class="card-img-overlay black-tp-layer  pos-center py-6">
      <div class="center-holder px-0">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-8 mx-auto px-0">
                  <h5 class="text-info mb-4 d-xs-none"> Featured Post </h5>
                  <h2 class="mb-4 text-white"> {{featuredPost.data.heading}}</h2>
                  <div class="blog-meta mb-4">
                     <a href="javascript:void(0);" class="mr-3">
                        <i class="mr-2 text-white fa " :class="featuredPost.data.user_icon"></i>
                        <span class="text-white font-sm"> {{featuredPost.data.user_name}}</span>
                     </a>
                     <a href="javascript:void(0);">
                        <i class="fa fa-calendar-o mr-2 text-white"></i>
                        <span class="text-white font-sm">{{featuredPost.data.date}}</span>
                     </a>
                  </div>
                  <p class="card-text d-xs-none"> {{featuredPost.data.content}}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
   import featuredPost from 'Components/data/featured.json'
   export default{
      data(){
         return{
            featuredPost
         }         
      }
   }
</script>