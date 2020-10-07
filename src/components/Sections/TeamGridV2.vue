<template>
   <div class="team section-gap">
      <div class="container">
         <div class="section-title-wrapper">
            <div class="row">
               <div class="col-sm-12 col-md-6 mx-auto text-center">
                  <h2> Our Team </h2>
                  <p class="mb-0 lead">Meet our professional and experienced team, each team member is highly skilled and master in their area.</p>
               </div>
            </div>
         </div>
         <div class="row">
            <!-- Team grid  -->
            <div  class="col-sm-12 col-md-4 col-xl-4  team-list" v-for="(content,i) of team.data.slice(0,3)" :key="i">
               <div class="card border-0 border-rad">
                  <div class="overlay-wrap">
                     <img class="img-fluid border-rad w-100" :src="content.image_path" alt="Card image cap" width="370" height="317" />
                  </div>
                  <div class="card-body p-0">
                     <h4 class="card-title mb-2">{{content.name}}</h4>
                     <span class="role font-italic d-block text-primary">{{content.type}}</span>
                     <p class="card-text mb-3">{{content.content}}</p>                     
                     <SocialIcons/>               
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import team from 'Components/data/team.json';
import SocialIcons from 'Components/Sections/SocialIconsV2';
export default {
   components:{
      SocialIcons
   },
   data(){
      return{
         team,
      }
   }
}
</script>