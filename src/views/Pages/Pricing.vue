<template>
   <div class="pricing-wrapper">
      <PageTitle
         headerTitle="Be a Design Hero"
         headerSubTitle="Our latest news and learning articles."
      >
      </PageTitle>
      <PricingV1></PricingV1>
      <PricingV2></PricingV2>
      <PricingV3></PricingV3>
   </div>
</template>
<script>
   import PricingV1 from 'Components/Sections/PricingV1.vue'
   import PricingV2 from 'Components/Sections/PricingV2.vue'
   import PricingV3 from 'Components/Sections/PricingV3.vue'
   export default {
      data(){
         return{

         }
      },
      components:{
         PricingV1,
         PricingV2,
         PricingV3
      }
   }
</script>
