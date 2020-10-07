<template>
   <div class="pricing-section-1 section-gap">
      <div class="container">
         <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 m-sm-b" v-for="(price,index) of pricing" :key="index">
               <div class="card text-center border-rad" :class="index == 1 ? 'active': ''">
                  <div class="card-body py-5 px-4">
                     <span class="mb-4 d-block lead"> {{price.typeofplan}} </span>
                     <h2 class="mb-4">
                        ${{price.price}}<sub class="font-sm"> </sub>
                     </h2>
                     <ul class="list-unstyled pricing-list mb-5">
                        <li class="mb-3" v-for="(list,index) of price.features" :key="'1'+index">
                           <i :class="list.icon" class="mr-2"></i>
                           {{list.name}} 
                        </li>
                     </ul>
                     <a href="javascript:void(0);" class="btn btn-outline-secondary btn-pill btn-block btn-lg submit-btn">Buy</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default{
      data(){
         return{
            pricing:[
               {
                  typeofplan:'Student',
                  price:19,
                  features:[
                     {
                        name:'Up to 10 users monthly',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Unlimited updates',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Free host & domain',
                        icon: 'fa fa-times'
                     },
                     {
                        name:'Support 24 / 7',
                        icon: 'fa fa-times'
                     }                       
                  ]
               },
               {
                  typeofplan:'Professional',
                  price:119,
                  features:[
                      {
                        name:'Up to 10 users monthly',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Unlimited updates',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Free host & domain',
                        icon: 'fa fa-times'
                     },
                     {
                        name:'Support 24 / 7',
                        icon: 'fa fa-times'
                     }       
                  ]
               },
               {
                  typeofplan:'Master',
                  price:344,
                  features:[
                      {
                        name:'Up to 10 users monthly',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Unlimited updates',
                        icon: 'fa fa-check'
                     },
                     {
                        name:'Free host & domain',
                        icon: 'fa fa-times'
                     },
                     {
                        name:'Support 24 / 7',
                        icon: 'fa fa-times'
                     }       
                  ]
               }
            ]
         }
      }
   }
</script>