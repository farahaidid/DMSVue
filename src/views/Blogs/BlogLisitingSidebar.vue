<template>
   <div>
      <PageTitle
         headerTitle="Latest Blog"
         headerSubTitle="Build something incredible!"
      >
      </PageTitle>
      <div class="blog-wrapper load-more-contain section-gap">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-6" v-for="(sideBar,index) of bloglistingsidebar.data" :key="index">
                  <div class="blog-wrap">
                     <div class="overlay-wrap mb-4">
                        <img :src="sideBar.image_path" width="765" height="320" alt="blog-list" class="img-fluid border-rad" />
                        <div class="card-img-overlay primary-tp-layer pos-center text-center">
                           <div class="center-holder">
                              <a href="/blog-detail" class="ih-fade-right"><i class="fa fa-arrow-right fa-3x fa-inverse"></i></a>
                           </div>
                        </div>
                     </div>
                     <div class="blog-content">
                        <h3 class="mb-2 title">
                           <a href="/blog-detail" class="text-dark">{{sideBar.heading}}</a>
                        </h3>
                        <div class="blog-meta mb-2">
                           <a href="javascript:void(0);" class="mr-3 text-muted">
                              <i :class="sideBar.user_icon" class="fa text-primary  mr-2"></i>
                              <span class="font-sm"> {{sideBar.user_name}}</span>
                           </a>
                           <a href="javascript:void(0);" class="text-muted">
                              <i class="fa text-primary  fa-calendar-o mr-2"></i>
                              <span class="font-sm">{{sideBar.date }}</span>
                           </a>
                        </div>
                        <!-- <div class="blog-categories mb-3 font-sm">
                           <p class="mb-0 d-inline-block mr-2">Categories:</p>
                           <div class="categories-tag d-inline-block">
                                 <a href="javascript:void(0);">Education,</a>
                                 <a href="javascript:void(0);">Fashion,</a>
                                 <a href="javascript:void(0);">Uncategorized</a>
                           </div>
                        </div> -->
                        <p class="mb-4">{{sideBar.content}}</p>
                        <a href="/blog-detail" :class="sideBar.read_more_bgcolor" class="btn btn-primary btn-md"> READ MORE </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
   </div>   
</template>
<script>
   import bloglistingsidebar from 'Components/data/blog-listing-sidebar.json'

   export default {
      data(){
         return{
            bloglistingsidebar
         }
      }
   }
</script>
