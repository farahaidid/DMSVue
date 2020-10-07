<template>
   <div class="team team-about section-gap">
      <div class="container">
         <div class="section-title-wrapper mb-5">
            <div class="row">
               <div class="col-sm-12 col-md-6 mx-auto text-center">
                  <h2 class="mb-3"> Meet Our Team </h2>
                  <p class="lead">Our creative specialists work on an international level at branding, design and development.</p>
               </div>
            </div>
         </div>
         <div class="row">
            <div  class="col-sm-12 col-md-4 m-sm-b" v-for="content of team.data.slice(0,3)" :key="content.id">
               <div class="card border-0 text-center">
                  <div class="overlay-wrap mb-4">
							<div class="circle-1 circle-style"></div>
							<div class="circle-2 circle-style"></div>
							<div class="circle-3 circle-style"></div>
                     <img class="img-fluid rounded-circle shadow-md" :src="content.image_path" alt="Card image cap" width="238" height="238" />
                  </div>
                  <div class="card-body p-0">
                     <h4 class="card-title mb-2">{{content.name}}</h4>
                     <span class="text-primary d-block font-italic mb-3">{{content.type}}</span>
                     <p class="card-text mb-4">{{content.content}}</p>
                     <SocialIconsV2/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import SocialIconsV2 from 'Components/Sections/SocialIconsV2'
import team from 'Components/data/team.json';
export default {
   components:{
      SocialIconsV2
   },
   data(){
      return{
        team
      }
   }
}
</script>