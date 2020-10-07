<template>
   <ul class="list-inline social-icons-list mb-0">
      <li class="list-inline-item" v-for="(social,i) of socials" :key="i">
         <a class="font-lg mx-1" href="javascript:void(0);" >
            <i class="fab " :class="social.icon"></i>
         </a>
      </li>
   </ul>
</template>
<script>
import team from 'Components/data/team.json';
export default {
   data(){
      return{
         team,
         socials :[
            { icon : 'fab fa-facebook-f'},
            { icon : 'fab fa-twitter text-info'},
            { icon : 'fab fa-pinterest-p text-danger'},
         ]
      }
   }
}
</script>