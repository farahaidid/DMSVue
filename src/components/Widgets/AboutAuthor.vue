<template>
   <!-- About Author Layout -->
   <div class="testimonial-card card text-center">
      <div class="card-up pb-5 pt-4 bg-warning">
         <h4 class="text-white mb-4">About the Author</h4>
      </div>
      <div class="testimonial-user">
         <img :src="aboutAuthor.data.avatar" class="img-fluid rounded-circle" alt="testimonail user thumb" width="100" height="100" />
      </div>
      <div class="card-body">
         <h4>{{aboutAuthor.data.name}}</h4>
         <div class="social-icons"></div>
         <SocialIconsV2/>
         <p>{{aboutAuthor.data.content}}</p>
      </div>
   </div>
</template>
<script>
   import SocialIconsV2 from 'Components/Sections/SocialIconsV2'
   import aboutAuthor from 'Components/data/about-author.json'
   export default{
      components:{
         SocialIconsV2
      },
      data(){
         return{
            aboutAuthor
         }         
      }
   }
</script>