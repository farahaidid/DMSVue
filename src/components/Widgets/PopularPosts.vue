<template>
   <!-- Popular Post -->
   <div class="popular-post mb-5">
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Popular Posts</h4>
      </div>
      <div v-for="(post,i) of PopularPosts.data.slice(0,3)" :key="i">
         <div class="media mb-4">
            <img :src="post.image_path" class="d-flex mr-3 border-rounded" width="100" height="100" />
            <div class="media-body">
               <p class="mb-1"><a href="javascript:void(0)">{{post.heading}}</a></p>
               <div class="blog-meta">
                     <a href="javascript:void(0)" class="mr-2">
                        <i class="mr-1 fix-icon text-muted fa" :class="post.user_icon"></i>
                        <span class="text-muted font-sm"> {{post.user_name}}</span>
                     </a>
                     <a href="javascript:void(0)">
                        <i class="fa fa-calendar-o fix-icon mr-2 text-muted"></i>
                        <span class="text-muted font-sm">{{post.date}}</span>
                     </a>
                  </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import PopularPosts from 'Components/data/popular-posts.json'
   export default{
      data(){
         return{
            PopularPosts
         }         
      }
   }
</script>