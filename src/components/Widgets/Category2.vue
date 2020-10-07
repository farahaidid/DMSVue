<template>
   <div>
      <!-- Categories list -->
      <div class="mb-4">
         <h4 class="sidebar-title mb-3">Categories</h4>
      </div>
      <div class="category-list">
         <ul class="list-unstyled" v-if="categories">
            <li v-for="(category,i) of categories.data" :key="i" class="mb-2 border-left" :class="category.border_color">
               <a href="javascript:void(0)" class="p-2 d-block">
                  <span class="align-top font-weight-bold">{{category.name}}</span>
               </a>
            </li>
         </ul>
      </div>
   </div>
</template>
<script>
   import categories from 'Components/data/categories.json'
   export default{
      data(){
         return{
            categories
         }         
      }
   }
</script>