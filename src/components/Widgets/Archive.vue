<template>
   <div>
      <!-- Archive Layout -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3"> Archive </h4>
      </div>
      <ul class="list-unstyled">
         <li v-for="(list,i) of archive.data" :key="i" class="bg-light p-2 mb-1">
            <div class="d-flex justify-content-between">
               <div class="d-flex align-content-start">
                  <span>{{list.date}}</span>
               </div>
               <div class="d-flex align-content-end">
                  <span>{{list.value}}</span>
               </div>
            </div>
         </li>
      </ul>
   </div>
</template>
<script>
   import archive from 'Components/data/archive.json'
   export default{
      data(){
         return{
            archive
         }         
      }
   }
</script>