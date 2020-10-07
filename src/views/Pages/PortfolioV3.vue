<template>
   <div>
      <PageTitle
         headerTitle="Our Latest Work"
         headerSubTitle="We build something great in the world."
      >
      </PageTitle>
      <div class="portfolio-wrapper section-gap port-3">
         <div class="container">
            <div class="blog-alternate" v-for="(portfolio,index) of portfoliov3.data" :key="index">
               <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6">
                     <div class="overlay-wrap">
                        <img :src="portfolio.image_path" width="500" height="500" class="img-fluid border-rad w-100" alt="gallery images" />
                        <a :href="portfolio.image_path" data-fancybox="images" class="card-img-overlay primary-tp-layer pos-center text-center">
                           <span class="center-holder">
                              <a class="ih-fade-down square-40 rounded-circle bg-white shadow-md">
                                 <i class="fa fa-plus align-middle"></i>
                              </a>
                           </span>
                        </a>
                     </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                     <div class="portfolio-content">
                        <h5 :class="portfolio.title_color" class="badge p-2 mb-3 btn-pill"> {{portfolio.title}} </h5>
                        <h3 class="mb-3"><a href="javascript:void(0);" class="text-dark">{{portfolio.heading}}</a></h3>
                        <p class="mb-4">{{portfolio.content}}</p>
                        <a :href="portfolio.read_more_url" class="btn btn-outline-secondary btn-chk-dark"> READ MORE </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>   
</template>
<script>
   import portfoliov3 from 'Components/data/portfolio-v3.json'
   export default {
      data(){
         return{
            portfoliov3
         }
      }
   }
</script>
