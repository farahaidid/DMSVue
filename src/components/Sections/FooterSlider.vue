<template>
   <div class="container">
      <div class="client-logo">
         <Slick 
            class="carousel "
            :options="slickOptions" 
            >
            <div ngxSlickItem v-for="(slide,i) of logoList" :key="i" class="slide">
               <a href="javascript:void(0);">
                  <img :src="slide.logo_path" class="img-fluid" alt="client logo" />
               </a>
            </div>
         </Slick>
      </div>   
   </div><!-- container closed -->
</template>
<script>
   import 'slick-carousel/slick/slick.css';
   import Slick from 'vue-slick';
   export default{
      components: { 
         Slick
      },
      data(){
         return{            
            logoList:[
               {
                  "logo_path":"/static/img/client-logo-1.png"
               },
               {
                  "logo_path":"/static/img/client-logo-2.png"
               },
               {
                  "logo_path":"/static/img/client-logo-3.png"
               },
               {
                  "logo_path":"/static/img/client-logo-4.png"
               },
               {
                  "logo_path":"/static/img/client-logo-5.png"
               },
               {
                  "logo_path":"/static/img/client-logo-3.png"
               }
            ],
            slickOptions: {
               slidesToShow: 5, 
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 2000,
               arrows: false,
               responsive: [
                  {
                     breakpoint: 1200,
                     settings: {
                        slidesToShow: 4
                     }
                  },
                  {
                     breakpoint: 992,
                     settings: {
                        slidesToShow: 3
                     }
                  },
                  {
                     breakpoint: 768,
                     settings: {
                        slidesToShow: 2
                     }
                  },
                  {
                     breakpoint: 480,
                     settings: {
                        slidesToShow: 1
                     }
                  }
               ]
            },
         }
      }
   }
</script>