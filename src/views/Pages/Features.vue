<template>
   <div class="feature-wrapper">
      <PageTitle
         headerTitle="Features"
         headerSubTitle="Our latest news and learning articles."
      >
      </PageTitle>
      <div class="feature-slide section-gap">
         <div class="container" v-if="features.data.feature_details">
            <div class="row" >
               <div class="col-sm-12 col-md-12 col-lg-6">
                  <img :src="features.data.feature_details.image_path" width="367" height="367" class="img-fluid w-100" alt="feature images" />
               </div>
               <div class="col-sm-12 col-md-12 col-lg-6">
                  <div class="feature-slide-content pt-3">
                        <h2 class="mb-4">{{features.data.feature_details.heading}}</h2>
                        <p class="mb-4 lead">{{features.data.feature_details.sub_heading}}</p>
                        <ul class="list-unstyled mb-0">
                           <li class="text-muted mb-3"  v-for="(feature,index) of features.data.feature_details.list" :key="index">
                              <i :class="feature.icon" class="mr-3"></i>
                              {{feature.content}}
                           </li>
                        </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <FeaturesGrid></FeaturesGrid>
      <SkillsWrapper></SkillsWrapper>
      <TestimonialSlider></TestimonialSlider>
   </div>
</template>
<script>
   import features from 'Components/data/features.json'
   import FeaturesGrid from 'Components/Sections/FeaturesGrid.vue'
   import SkillsWrapper from 'Components/Sections/SkillsWrapper.vue'
   import TestimonialSlider from 'Components/Sections/TestimonialSlider.vue'

   export default {
      data(){
         return{
            features
         }
      },
      components:{
         FeaturesGrid,
         SkillsWrapper,
         TestimonialSlider,
      }
   }
</script>
