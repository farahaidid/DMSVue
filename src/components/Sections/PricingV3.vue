<template>
   <div class="pricing-section-3">
      <div class="section-gap">
         <div class="container">
				<div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6"  v-for="(price,index) of pricing" :key="index">
               <div class="card border-0 border-rad card-shadow m-sm-b " :class="price.bgClass">
                  <div class="card-body p-4">
                     <div class="card-header border-0 mb-3">
                        <div class="position-relative">
                           <h2 class="m-0">{{price.typeofplan}}</h2>
                           <div class="plan-price">
                              <h3 class="m-0">{{price.price}}</h3>
                           </div>
                        </div>
                     </div>
                     <ul class="list-unstyled width-paragraph mb-5">
                        <li class="mb-3" v-for="(list,index) of price.features" :key="'1'+index">
                           <i class="fa fa-check mr-2"></i>
                           <span>{{list}}</span>
                        </li>
                     </ul>
                     <a href="javascript:void(0);" :class="price.btnClass" class="btn btn-pill btn-block btn-lg submit-btn">Buy</a>
                  </div>
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
                  typeofplan:'Basic Plans',
                  price:'Free',
                  bgClass:"",
                  btnClass:'btn-outline-secondary',
                  features:[
                     'Sell product with access to 10 space',
                     'Practice live with our sell Challenge Engine',
                     'Get help in our members-only form'
                  ]
               },
               {
                  typeofplan:'Advance Plans',
                  price:'$48',
                  bgClass:"bg-success",
                  btnClass:'btn-light',
                  features:[
                     'Sell product with access to 100 space',
                     'Practice live with our sell Challenge Engine',
                     'Get help in our members-only form',
                  ],
                  
               }
            ]
         }
      }
   }
</script>