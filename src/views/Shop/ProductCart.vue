<template>
  <div>
    <PageTitle headerTitle="Your Cart" headerSubTitle="Sed ut perspiciatis unde omnis iste natus error "></PageTitle>
    <div class="product-wrapper section-gap cart-page">
      <div class="container">
				<div class="section-title-wrapper">
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<h2>Your Shopping Bag</h2>
						<p class="mb-0 lead">You have <span class="text-primary">3</span> Items in your cart</p>
					</div>
				</div>
			</div> 
        <div class="table-responsive mb-5">
          <table class="table table-bordered">
            <thead>
              <tr>
					   <th></th>
                <th>Image</th>
                <th>Products</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product,index) of productcart" :key="index">
                <td class="w-20 text-center position-relative">
                  <button
                    type="button"
                    class="text-danger close-btn bg-transparent border-0 font-2x"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i class="ion-ios-close"></i>
                    </span>
                  </button>
                </td>
                <td class="w-20 text-center">
                  <div class="p-img">
                    <img
                      :src="product.image"
                      alt="product image"
                      class="img-fluid card-shadow"
                      width="80"
                      height="80"
                    />
                  </div>
                </td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td class="w-15 cart-number">
                  <input
                    class="form-control"
                    placeholder="1"
                    type="number"
                    :value="product.quentity"
                  />
                </td>
                <td>{{product.total}}</td>
              </tr>
              <tr>
                <td colspan="6">
                  <form class="form-inline" action="javascript:void(0);" method="post">
                    <input
                      class="form-control form-control-lg mr-2 coupon-code"
                      type="text"
                      placeholder="Coupon Code"
                    />
                    <a href="javascript:void(0);" class="btn btn-primary px-4">Apply</a>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- table responsive closed -->
        <div class="cart-info">
          <div class="row">
            <div class="col-sm-12 col-md-6 ml-auto">
              <div class="bg-light py-4 px-3">
                <h2 class="font-26 mb-4">Cart Totals</h2>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>$200.00</td>
                    </tr>
                    <tr class="border-bottom font-weight-bold">
                      <td>Total</td>
                      <td>$200.00</td>
                    </tr>
                  </tbody>
                </table>
                <div class="block">
                  <router-link
                    to="/product-checkout"
                    class="btn btn-primary submit-btn btn-block btn-lg"
                  >Checkout</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- cart info closed -->
      </div>
      <!--container closed -->
    </div>
    <!-- product wrapper closed -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      productcart: [
        {
          name: "Fleece Jacket",
          image: "static/img/2.jpg",
          price: "$36.00",
          quentity: 1,
          total: "$36.00"
        },
        {
          name: "Slick Top",
          image: "static/img/3.jpg",
          price: "$55.00",
          quentity: 1,
          total: "$55.00"
        },
        {
          name: "Zipped Top",
          image: "static/img/4.jpg",
          price: "$30.00",
          quentity: 1,
          total: "$30.00"
        }
      ]
    };
  }
};
</script>
