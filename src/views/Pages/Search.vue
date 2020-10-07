<template>
   <div class="">
      <PageTitle
         headerTitle="Search"
         headerSubTitle="Our latest news and learning articles."
      >
      </PageTitle>
      <SearchNow></SearchNow>
      <div class="search-ques section-gap">
         <div class="container">
            <div class="text-center mb-5">
               <h2 class="font-2x">About <span class="text-primary">{{search.data.length}} results</span> found in zemle.</h2>
            </div>
            <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-6" v-for="(list,index) of search.data" :key="index">
                  <div class="cards border-bottom">
                     <div class="card-body py-4 px-0">
                        <h3 class="font-lg">{{list.heading}}</h3>
                        <a href="javascript:void(0);" class="font-sm mb-2 d-inline-block">{{list.link}}</a>
                        <p class="text-muted mb-0">{{list.content}}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>  
</template>
<script>
   import SearchNow from 'Components/Sections/SearchNow.vue'
   import search from 'Components/data/search.json'
   export default {
      data(){
         return{
            search
         }
      },
      components:{
         SearchNow
      }
   }
</script>
