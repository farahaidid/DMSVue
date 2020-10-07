<template>
   <!-- Categories list -->
   <div class="categories-list mb-5">
      <div class="">
         <h4 class="sidebar-title">Category</h4>
      </div>
      <ul class="list list-unstyled" v-if="Categories">
         <li class="mb-3" v-for="(category,i) of Categories.data" :key="i">
               <a href="javascript:void(0)">
                  <i class="ion-ios-arrow-forward mr-2"></i>
                  <span class="align-top font-weight-bold">{{category.name}}</span>
               </a>
         </li>
      </ul>
   </div>
</template>
<script>
   import Categories from 'Components/data/categories.json'
   export default{
      data(){
         return{
            Categories
         }         
      }
   }
</script>