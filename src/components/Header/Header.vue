<template>
   <!--  Top menu -->
   <nav 
      id="mainNav" 
      class="navbar navbar-expand-md navbar-dark fixed-top py-0"
      :class="$route.path==='/home' ? '' : 'bg-header'"
      >      
      <div class="rtl-layout" @click="addToggleClass()"><a href="javascript:void(0);">RTL</a></div>
      <div class="container">
         <router-link class="navbar-brand" to="/home" routerLinkActive="active-link">
            <img src="@/assets/images/logos/logo_transparent.png" class="img-fluid logo" width="110" height="37">
         </router-link>

         <button 
            class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul id="main" class="navbar-nav ml-auto main-menu list-unstyled">
               <li 
                  @click="menuToggleLink('menuNo'+i);" 
                  class="parent nav-item"
                  v-for="(menuItem,i) in menus"
                  :id="'menuNo'+i"
                  :key="i" 
                  >
                  <router-link 
                     class="nav-link" 
                     :to="menuItem.state"  
                     v-if="menuItem.type == 'link'" 
                     @click.native="removeCollapseInClass();"
                  >
                     {{ menuItem.name }}
                  </router-link>
                  <a 
                     v-if="menuItem.type == 'sub'" 
                     class="nav-link" 
                     href="javascript:void(0)"                     
                  >
                     {{ menuItem.name }}&nbsp;
                     <i :class="menuItem.icon" @click.stop="menuToggle('menuNo'+i)"></i>
                  </a>
                  <ul 
                     v-if="menuItem.type == 'sub' && menuItem.children" 
                     :class="['sub-menu arrow-up list-unstyled', menuItem.customClass]" >
                     <li 
                        class="nav-item" 
                        v-for="(grandchildItem,i) of menuItem.children"
                        :key="i"
                        >
                        <router-link 
                           class="nav-link" 
                           :to="grandchildItem.state"
                           v-if="grandchildItem.type == 'link'" 
                           @click.native="removeCollapseInClass()"      
                        >
                           -- {{ grandchildItem.name }}
                        </router-link>
                     </li>
                  </ul>
               </li>
               <li>
                  <div 
                     class="search-form" 
                     click-outside 
                  >
                     <span 
                        data-target="#search-style-simple" 
                        @click="showSearch()"
                     >
                        <i class="fa fa-search"></i>
                     </span>
                     <div 
                        class="module-container" 
                        :class="{'search-active': searchactive}" 
                        id="search-style-simple"
                     >
                        <form role="search" method="get" class="search-box" action="javascript:void(0);">
                           <input type="search" class="form-control" placeholder="Search" value="" name="" />
                           <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                     </div><!-- /module-container -->
                  </div><!-- /module -->
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>
<script>
import services from '@/assets/json/services.json'
   export default{
      data(){
         return{
            searchactive:false,
         }
      },
      computed:{
         menus(){
            let serviceMenu = {
               state:"",
               name:"Services",
               type:"sub",
               icon: 'fa fa-caret-down',
               customClass: ['service-menu'],
               children: services.map(service => ({
                  state: '/service/'+service.code, name: service.title, type:"link"
               }))
            }
            return [
               {
                  state: "/home",
                  name: "Home",
                  type:"link"
               },
               serviceMenu,
               {
                  state:"",
                  name:"Pages",
                  type:"sub",
                  icon: 'fa fa-caret-down',
                  children: [
                     { state: 'about', name: 'About', type:"link"},
                     { state: 'features', name: 'Features', type:"link"},
                     { state: 'contact', name: 'Contact', type:"link"},
                     { state: 'pricing', name: 'Pricing', type:"link"},
                     { state: 'search', name: 'Search', type:"link"},
                     { state: 'portfolio-v1', name: 'Portfolio V1', type:"link"},
                     { state: 'portfolio-v2', name: 'Portfolio V2', type:"link"},
                     { state: 'portfolio-v3', name: 'Portfolio V3', type:"link"}
                   
                  ]
               },
               {
                  state:"",
                  name:"Features",
                  type:"sub",
                  icon: 'fa fa-caret-down',
                  children: [
                     { state: 'login', name:'Login', type:"link"},
                     { state: 'sign-up', name: 'Sign Up', type:"link"},
                     { state: 'thank-you', name: 'Thank You', type:"link"},
                     { state: 'maintenance', name: 'Maintenance', type:"link"},
                     { state: 'not-found', name: '404', type:"link"}
                  ]
               },
               {
                  state:"",
                  name:"Shop",
                  type:"sub",
                  icon: 'fa fa-caret-down',
                  children: [
                     { state: 'product-grid', name:'Product Grid', type:"link"},
                     { state: 'product-cart', name: 'Product Cart', type:"link"},
                     { state: 'product-checkout', name: 'Product Checkout', type:"link"},
                     { state: 'product-detail', name: 'Product Detail', type:"link"}
                  ]
               },
               {
                  state:"",
                  name:"Blog",
                  type:"sub",
                  icon: 'fa fa-caret-down',
                  children: [
                     { state: 'blog-listing-sidebar', name:'blog column ', type:"link"},
                     { state: 'blog-column3', name: 'Blog Column1', type:"link"},
                     { state: 'blog-masonry3', name: 'Blog Masonry', type:"link"},
                     { state: 'blog-sidebar', name: 'Blog Sidebar', type:"link"},
                     { state: 'blog-detail', name: 'Blog Detail', type:"link"}
                  ]
               }
            ]
         },
      },
      mounted(){
         this.onScrollEvent();
      },
      methods:{
         showSearch(){
            this.searchactive = !this.searchactive;
         },
         menuToggleLink(id){
            if (document.getElementById(id).classList.contains("open")){
               document.getElementById(id).classList.remove("open");
            } else if(!document.getElementById(id).classList.contains("open")) {
               let elements = document.querySelectorAll(".parent");
               for (var i = 0; i < elements.length; i++) {
                  elements[i].classList.remove('open');
               }
               document.getElementById(id).classList.add("open");
            }   
         },
         addToggleClass(){
            document.querySelector("body").classList.toggle("rtl-enable");            
         },
         removeCollapseInClass(){
            document.getElementById("navbarCollapse").classList.remove('show');
         },
         onScrollEvent(){
            var headerSticky = document.getElementById('mainNav');
            window.onscroll = function() {
               if (window.pageYOffset >= 100) {
                  headerSticky.classList.add("scrollHeader");
               }  else {
                  headerSticky.classList.remove("scrollHeader");
               }
            }
         }
      }
   }
</script>
<style>
   .scrollHeader{
      /* background-color: #1565c0; */
      background-color: #5D6976;
   }
</style>

<style lang="sass" scoped>
.service-menu
   width: 95vw
   max-width: 450px
.logo
   width: 110px 
   height: 55px
</style>