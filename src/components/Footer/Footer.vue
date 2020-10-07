<template>
   <div>
      <div class="footer-wrapper-2 py-5">
         <div class="container container-full-width text-center">
            <div class="row align-items-center">
               <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div class="bottom-footer">
                     <ul class="list-inline mb-0"  v-if="footer2Menu">
                        <li class="list-inline-item" v-for="(menu,i) of footer2Menu" :key="i">
                           <a :href="menu.state" routerLinkActive="active-link" v-if="menu.type === 'link'" class="text-white">
                              <span>{{ menu.name }}</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div class="social-without-bg">
                     <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a class="text-white" href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a class="text-white" href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a class="text-white" href="javascript:void(0)"><i class="fab fa-google-plus-g"></i></a></li>
                        <li class="list-inline-item"><a class="text-white" href="javascript:void(0)"><i class="fab fa-pinterest"></i></a></li>
                        <li class="list-inline-item"><a class="text-white" href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a></li>
                     </ul>
                  </div>
               </div>
					<div class="copright text-center col-sm-12 col-md-12 col-lg-12">
					  <span class="text-white ">&copy; 2020, All Right Reserved </span>
				</div>
            </div>
				
         </div><!-- container closed -->
      </div>
   </div>   
</template>
<script>


   export default{
      components:{

      },
      data(){
         return{
				// showSubscriber: true,
            footer2Menu:[
               {
                  state: "home",
                  name: "Home",
                  type:"link"
               },
               {
                  state:"sidebar-widgets",
                  name:"Widgets",
                  type:"link"
               },
               {
                  state:"about",
                  name:"About",
                  type:"link"
               },
               {
                  state:"contact",
                  name:"Contact",
                  type:"link"
               },
               {
                  state:"features",
                  name:"Features",
                  type:"link"
               },
               {
                  state:"support",
                  name:"Support",
                  type:"link"
               },
               {
                  state:"search",
                  name:"Search",
                  type:"link"
               }
            ]
         }
		},
		methods: {
      getUrl(){
			let val = this.$route.path.split("/");
				if(val[1] == 'home')
				{
					this.showSubscriber = false;
				} else {
					this.showSubscriber = true;               
				}
			}
		},
		mounted(){
			this.getUrl();
		},
		watch: {
			$route() {
				this.getUrl();
			}
		},
   }
</script>