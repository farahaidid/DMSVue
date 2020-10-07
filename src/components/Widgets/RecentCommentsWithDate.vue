<template>
   <div> 
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Recent Comments </h4>
      </div>
      <ul class="list-unstyled">
         <li v-for="(comments,i) of recentComments.data" :key="i" class="border-bottom py-2">
            <a href="javascript:void(0)" class="mb-2 d-inline-block font-weight-bold">{{comments.content}}</a>
               <p class="text-muted small m-0">
                  <span>{{comments.date}}</span>at<span>{{comments.date }}</span>
               </p>
         </li>
      </ul>
   </div>
</template>
<script>
   import recentComments from 'Components/data/recent-comments.json'
   export default{
      data(){
         return{
            recentComments
         }         
      }
   }
</script>