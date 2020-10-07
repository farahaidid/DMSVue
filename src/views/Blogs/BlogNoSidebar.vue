<template>
   <div>
      <BlogBanner/>
      <div class="blog-wrapper load-more-contain section-gap">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                  <div class="blog-alternate mb-4" v-for="(sideBar,index) of blogsidebar.data" :key="index">
                     <div class="row mb-3 align-items-center">
                        <div class="col-sm-12 col-md-6">
                           <div class="overlay-wrap mb-3">
                              <img :src="sideBar.image_path" width="900" alt="blog-sidebar" height="504" class="img-fluid border-rad" />
                              <div class="card-img-overlay primary-tp-layer pos-center text-center">
                                 <div class="center-holder">
                                    <a href="javascript:void(0)" class="ih-fade-right"><i class="fa fa-arrow-right fa-3x fa-inverse"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <div class="blog-content mb-3 px-3">
                              <h3 class="mb-3"><a href="javascript:void(0);" class="text-dark">{{sideBar.heading}}</a></h3>
                              <div class="blog-meta mb-2">
                                 <a href="javascript:void(0)" class="mr-3 text-muted">
                                    <i :class="sideBar.user_icon" class="fa text-primary  mr-2 "></i>
                                    <span class="font-sm align-top"> {{sideBar.user_name}}</span>
                                 </a>
                                 <a href="javascript:void(0)" class="text-muted">
                                    <i class="fa text-primary fa-calendar-o mr-2 "></i>
                                    <span class="font-sm align-top">{{sideBar.date }}</span>
                                 </a>
                              </div>
                              <p class="mb-4">{{sideBar.content}}</p>
                              <a href="javascript:void(0);" :class="sideBar.read_more_bgcolor" class="  btn btn-outline-secondary btn-chk-dark"> READ MORE </a>
                           </div>
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
   import blogsidebar from 'Components/data/blog-sidebar.json'
   import BlogBanner from 'Components/Banner/BlogBanner'
   export default {
      data(){
         return{
            blogsidebar
         }
      },
      components:{
         BlogBanner
      }
   }
</script>
