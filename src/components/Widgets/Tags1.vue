<template>
   <div>
      <div class="mb-4">
         <h4 class="sidebar-title mb-3"> Tags </h4>
      </div>
      <a 
         href="javascript:void(0)" 
         class="btn btn-outline-secondary btn-sm mb-2 mx-1" 
         v-for="(tag,i) of tags.data" :key="i"> {{tag.value}}</a>
   </div>
</template>
<script>
   import tags from 'Components/data/tags.json'
   export default{
      data(){
         return{
            tags
         }         
      }
   }
</script>