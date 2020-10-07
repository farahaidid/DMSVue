<template>
   <div>
      <PageTitle
         headerTitle="Happy Shopping"
         headerSubTitle="25% Off and Free global delivery for all products"
      >
      </PageTitle>
      <div class="product-wrapper section-gap">
         <div class="container">
            <div class="row mb-3">
               <div class="col-sm-12 col-md-6 m-md-b">
                  <h2 class="text-capitalize font-2x mb-4">Billing Details</h2>
                  <form class="billing-form" action="javascript:void(0)" method="post">
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6 m-xs-b">
                           <label>First Name<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Last Name</label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                           <label>Email Address<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="Email" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Phone<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="Tel" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group">
                        <label>Country<sup class="font-lg ml-1 align-bottom">*</sup></label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group">
                        <label>Address<sup class="font-lg ml-1 align-bottom">*</sup></label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                           <label>Town/City<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Postal Code</label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group mb-5">
                        <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                           <input type="checkbox" class="custom-control-input">
                           <span class="custom-control-indicator"></span>
                           <span class="custom-control-description">Create an account?</span>
                        </label>
                     </div>
                     <div class="form-group">
                        <label>Order Note</label>
                        <textarea class="form-control" rows="5"></textarea>
                     </div>
                  </form>
               </div>
               <div class="col-sm-12 col-md-6">
                  <h2 class="text-capitalize font-2x mb-4">Ship to a different address?</h2>
                  <form class="billing-form" action="javascript:void(0)" method="post">
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                           <label>First Name<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Last Name</label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                           <label>Email Address<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="Email" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Phone<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="Tel" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group">
                        <label>Country<sup class="font-lg ml-1 align-bottom">*</sup></label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group">
                        <label>Address<sup class="font-lg ml-1 align-bottom">*</sup></label>
                        <input type="text" class="form-control form-control-lg" placeholder="" required />
                     </div>
                     <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                           <label>Town/City<sup class="font-lg ml-1 align-bottom">*</sup></label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <label>Postal Code</label>
                           <input type="text" class="form-control form-control-lg" placeholder="" required />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                           <input type="checkbox" class="custom-control-input">
                           <span class="custom-control-indicator"></span>
                           <span class="custom-control-description">Remember my preference</span>
                        </label>
                     </div>
                  </form>
               </div>
            </div><!-- row closed -->
            <div class="card mb-4">
               <div class="card-body checkout-table">
                  <h2 class="text-capitalize font-2x mb-4">Your order</h2>
                  <div class="row checkout-header">
                     <div class="col-6 col-sm-6 col-md-4 tx-left">
                        <span>Product</span>
                     </div>
                     <div class="col-6 col-sm-6 col-md-4 tx-right">
                        <span>Total</span>
                     </div>
                  </div>
                  <hr>
                  <div class="row checkout-container">
                     <div class="col-6 col-sm-6 col-md-4 tx-left">
                        <ul class="m-0 list-unstyled list-gap">
                           <li>Backpack  × 1</li>
                           <li>Simple Sack  × 1</li>
                           <li>Subtotal</li>
                           <li class="font-weight-bold font-lg">Total</li>	
                        </ul>
                     </div>
                     <div class="col-6 col-sm-6 col-md-4 tx-right">
                        <ul class="list-unstyled list-gap">
                           <li>£78.00</li>
                           <li>£88.00</li>
                           <li>£166.00</li>
                           <li class="font-weight-bold font-lg">£166.00</li>
                        </ul>
                     </div>
                  </div>
                  <hr>
                  <div class="check-payment">
                     <div class="mb-3">
                        <label class="custom-control custom-radio mb-0">
                                 <input class="custom-control-input" id="radio1" name="radio" type="radio">
                                 <span class="custom-control-indicator"></span>
                                 <span class="custom-control-description">Cheque Payment</span>
                           </label>
                           <p class="text-muted px-4 small">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                     </div>
                     <div class="mb-3">
                        <label class="custom-control custom-radio mb-0">
                                 <input class="custom-control-input" id="radio2" name="radio" type="radio">
                                 <span class="custom-control-indicator"></span>
                                 <span class="custom-control-description">Paypal</span>
                           </label>
                           <div class="px-4"><img src="static/img/paypal.jpg" alt="paypal visa" class="img-fluid" width="203" height="53" /></div>
                     </div>
                  </div><!-- cheack Payment -->
               </div>
            </div>
            <a href="javascript:void(0);" class="btn btn-primary px-4">Place Order</a>
         </div><!-- container closed -->
      </div><!-- product wrapper closed -->
   </div>   
</template>
<script>
  
   export default {
      data(){
         return{
            productcart:[
               {
                  name:'Fleece Jacket',
                  image:'static/img/2.jpg',
                  price:'$36.00',
                  quentity:1,
                  total:'$36.00'
               },
               {
                  name:'Slick Top',
                  image:'static/img/3.jpg',
                  price:'$55.00',
                  quentity:1,
                  total:'$55.00'
               },
               {
                  name:'Zipped Top',
                  image:'static/img/4.jpg',
                  price:'$30.00',
                  quentity:1,
                  total:'$30.00'
               }
            ]
         }
      }
   }
</script>
