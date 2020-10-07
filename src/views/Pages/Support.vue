<template>
   <div class="support-wrapper">
      <PageTitle
         headerTitle="Support"
         headerSubTitle="Our latest news and learning articles."
      >
      </PageTitle>
      <SearchNow></SearchNow>
      <SupportTopics></SupportTopics>
      <SupportCards></SupportCards>
      <Faq></Faq>
   </div>
</template>
<script>
   import SearchNow from 'Components/Sections/SearchNow.vue'
   import SupportTopics from 'Components/Sections/SupportTopics.vue'
   import SupportCards from 'Components/Sections/SupportCards.vue'
   import Faq from 'Components/Sections/Faq.vue'

   export default {
      components:{
         SearchNow,
         SupportTopics,
         SupportCards,
         Faq
      }
   }
</script>
