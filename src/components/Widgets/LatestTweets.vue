<template>
   <div>
      <!-- Latest Tweet -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Latest Tweets</h4>
      </div>
      <div class="media mb-3" v-for="(tweet,i) of tweets.data" :key="i">
         <div class="d-flex mr-2 text-primary pt-1"><i class=" fab " :class="tweet.icon"></i> </div>
         <div class="media-body" >{{tweet.content}}</div>
      </div>
   </div>
</template>
<script>
   import tweets from 'Components/data/latest-tweets.json'
   export default{
      data(){
         return{
            tweets
         }         
      }
   }
</script>