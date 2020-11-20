<template>
  <div class="card card-product">
    <div>
      <img
        class="img-fluid w-100"
        :src="getImage(service.banner)"
        alt="Card image cap"
        width="280"
        height="260"
      />
    </div>
    <div class="card-body p-4">
      <!-- <div class="cart-icon">
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
      </div> -->
      <h4 class="text-capitalize mb-3">{{service.title}}</h4>
      <p>{{service.description}}</p>
      <div class>
        <!-- <p class="text-primary font-weight-med font-lg mb-4">
          <del class="mr-2 text-muted">$510</del>
          ${{product.price}}
        </p> -->
        <!-- <a href="#" class="btn btn-primary btn-sm">Buy Now</a> -->
        <span class="text-primary cursor-pointer" @click="gotoServiceDetai">see details</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    service: Object
  },
  methods:{
    getImage(name){
      return require('../../assets/images/banners/'+name)
    },
    gotoServiceDetai(){
      this.$router.push({
        name: 'ServiceDetails',
        params:{
          serviceCode: this.service.code
        }
      })
    },
  },
}
</script>

<style>

</style>