<template>
   <div>
      <!-- Recent Comment with icon widget -->
      <div class="mb-3">
         <h4 class="sidebar-title">Recent Comments </h4>
      </div>
      <ul  class="list-unstyled">
         <li v-for="(comments,i) of recentComments.data" :key="i" class="border-bottom py-3">
            <a href="javascript:void(0)" class="media font-weight-bold">
               <span class="d-flex mr-3"><i class="text-primary pt-1 fa " :class="comments.icon"></i> </span>
               <div class="media-body">
                  <p class="m-0">{{comments.content}}</p>
               </div>
            </a>
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