<template>
  <div>
    <PageTitle
      headerTitle="Happy Shopping "
      headerSubTitle="25% Off and Free global delivery for all products "
    ></PageTitle>
    <div class="product-wrapper shop-list load-more-contain section-gap">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-6 col-md-6 col-lg-4"
            v-for="(product,index) of productGrid.data"
            :key="index"
          >
            <div class="card card-product">
              <div>
                <img
                  class="img-fluid w-100"
                  :src="product.image"
                  alt="Card image cap"
                  width="280"
                  height="260"
                />
              </div>
              <div class="card-body p-4">
                <div class="cart-icon">
                  <ul class="list-unstyled d-flex">
                    <li title="Add to Wishlist">
                      <router-link
                        to="/product-detail"
                        class="square-40 bg-white rounded-circle text-dark card-shadow"
                      >
                        <i class="fa fa-heart text-danger"></i>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <h4 class="text-capitalize mb-3">{{product.title}}</h4>
                <p>{{product.description}}</p>
                <div class>
                  <p class="text-primary font-weight-med font-lg mb-4">
                    <del class="mr-2 text-muted">$510</del>
                    ${{product.price}}
                  </p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import productGrid from "Components/data/products-grid.json";

export default {
  data() {
    return {
      productGrid
    };
  }
};
</script>
