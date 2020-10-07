<template>
   <div>
      <PageTitle
         headerTitle="Blog Masonry Column 2"
         headerSubTitle="Build something incredible!"
      >
      </PageTitle>
      <div class="blog-masonry-wrapper load-more-contain section-gap">
         <div class="container">
            <div class="row">
               <div v-for="(masonary2,index) of blogmasonary2.data" :class="masonary2.mClass" :key="index">
                  <div class="card-deck">
                     <div class="card border-rad text-white text-center mb-4">
                        <img class="card-img" :src="masonary2.image_path" alt="Card image">
                        <div class="card-img-overlay black-tp-layer border-rad p-5 p-5-down d-flex justify-content-center align-items-center">
                         <div>
									 <h3>
									   <a href="javascript:void(0)" class="card-title text-white mb-4 d-inline-block">{{masonary2.heading}}</a>
										</h3>
                           <div>
                              <img :src="masonary2.avatar" alt="user image" class="rounded-circle shadow-md img-fluid mb-2" width="60" height="60" />
                              <span class="text-white d-block">{{masonary2.user_name}}</span>
                           </div>
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
   import blogmasonary2 from 'Components/data/blog-masonary2.json'
   
   export default {
      data(){
         return{
            blogmasonary2
         }
      },
   }
</script>


