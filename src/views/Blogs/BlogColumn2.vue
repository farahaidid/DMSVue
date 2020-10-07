<template>
   <div>
      <PageTitle
         headerTitle="Latest Blog Post-2 Column"
         headerSubTitle="Build something incredible!"
      >
      </PageTitle>
      <div class="blog-wrapper load-more-contain section-gap">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-6 mb-3" v-for="(post2Column,index) of blogColumn2.data" :key="index">
                  <div class="blog-wrap mb-4">
                     <div class="overlay-wrap mb-4">
                        <img :src="post2Column.image_path" alt="blog-img" width="572" height="391" class="img-fluid w-100 border-rad" />
                        <div class="card-img-overlay primary-tp-layer pos-center text-center">
                           <div class="center-holder">
                              <a href="/blog-detail" class="ih-fade-right"><i class="fa fa-arrow-right fa-3x fa-inverse"></i></a>
                           </div>
                        </div>
                     </div>
                     <div class="blog-content text-center">
                        <h4 class="mb-3"><a href="/blog-detail">{{post2Column.heading}}</a></h4>
                        <div class="blog-meta mb-1">
                           <a href="javascript:void(0);" class="mr-3 text-muted">
                              <i :class="post2Column.user_icon" class="fa text-primary mr-2 "></i>
                              <span class="font-sm"> {{post2Column.user_name}}</span>
                           </a>
                           <a href="javascript:void(0);" class="text-muted">
                              <i class="fa text-primary fa-calendar-o mr-2 "></i>
                              <span class="font-sm">{{post2Column.date}}</span>
                           </a>
                        </div>
                        <div class="blog-categories mb-3 font-sm">
                           <p class="mb-0 d-inline-block mr-2">Categories:</p>
                           <div class="categories-tag d-inline-block">
                              <a href="javascript:void(0);">Education</a>
                              <a href="javascript:void(0);">Fashion</a>
                              <a href="javascript:void(0);">Uncategorized</a>
                           </div>
                        </div>
                        <p class="mb-4">{{post2Column.content}}</p>
                        <a href="/blog-detail" class="btn btn-primary">READ MORE</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
   </div>   
</template>
<script>
   import blogColumn2 from 'Components/data/blog-column2.json'

   export default {
      data(){
         return{
            blogColumn2
         }
      }
   }
</script>
