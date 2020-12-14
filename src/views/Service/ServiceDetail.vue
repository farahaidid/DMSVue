<template>
  <div>
    <PageTitle
      :headerTitle="service.title"
      headerSubTitle=""
    ></PageTitle>
    <div class="product-wrapper section-gap pb-0">
      <div class="container">
        <div class="row mb-4">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="mb-4">
              <div class="feature-box-thumb">
                <img :src="getServiceBanner(service.banner)" class="img-fluid card-shadow" alt="product image" />
              </div>
              <div class="mt-3">
                <!-- <router-link to="/product-cart" class="btn btn-primary btn-lg">Add To Cart</router-link> -->
                <b-btn size="sm" variant="outline-success" class="" v-if="!isLogged" @click="openLogin">
                  Login To Get This Service
                </b-btn>
                <b-btn size="sm" variant="outline-success" class="" v-else @click="gotoMessage">
                  Contact To Get This Service <b-icon icon="chat-left-dots" class="ml-1"></b-icon>
                </b-btn>
              </div>
              <!-- feature box thumb closed -->
            </div>
            <!-- <div class>
              <ul class="list-unstyled p-gallary-thumb list-p-detail row">
                <li class="col-6 col-sm-3 col-md-3 mb-4">
                  <a href="javascript:void(0);">
                    <img src="static/img/2.jpg" class="img-fluid" alt="product image" />
                  </a>
                </li>
                <li class="col-6 col-sm-3 col-md-3 mb-4">
                  <a href="javascript:void(0);">
                    <img src="static/img/2.jpg" class="img-fluid" alt="product image" />
                  </a>
                </li>
                <li class="col-6 col-sm-3 col-md-3 mb-4">
                  <a href="javascript:void(0);">
                    <img src="static/img/2.jpg" class="img-fluid" alt="product image" />
                  </a>
                </li>
                <li class="col-6 col-sm-3 col-md-3 mb-4">
                  <a href="javascript:void(0);">
                    <img src="static/img/2.jpg" class="img-fluid" alt="product image" />
                  </a>
                </li>
              </ul>
            </div> -->
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 product-detail-content mb-4">
            <div class="mb-3">
              <!-- <h2 class="text-capitalize mb-3">{{service.title}}</h2> -->
              <!-- <h4 class="font-26 text-primary">
                <del class="text-muted mr-2">$187</del> $125.00
              </h4> -->
            </div>
            <div class="mb-4">
              <p v-for="(feature, fI) in service.features" :key="fI">
                <b-icon icon="back"></b-icon>  {{feature}}
              </p>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros lobortis, vestibulum turpis ac, pulvinar odio. Praesent vulputate a elit ac mollis. In sit amet ipsum turpis. Pellentesque venenatis, libero vel euismod lobortis, mi metus luctus augue, eget dapibus elit nisi eu massa. Phasellus sollicitudin nisl posuere nibh ultricies.</p> -->
            </div>
            <!-- <div class="mb-4">
              <p class="mb-0">
                <span class="font-weight-bold">Category :</span>
                <a href="#">Electronics</a>,
                <a href="#">Lights</a>,
                <a href="#">Solar</a>
              </p>
            </div> -->
            <!-- <div></div>
            <div class="d-flex justify-content-between mb-4">
              <div class="w-50 mr-3">
                <input class="form-control form-control-lg" placeholder="1" value="1" type="number" />
              </div>
              <div class="w-50">
                <select class="form-control form-control-lg">
                  <option>Select Size</option>
                  <option>38</option>
                  <option>40</option>
                  <option>42</option>
                  <option>44</option>
                  <option>46</option>
                </select>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- row closed -->
      <div class="tab-style section-gap pt-0">
        <div class="container">
          <ul class="nav nav-tabs nav-tabs-bottom mb-4">
            <li class="nav-item" aria-expanded="false">
              <a
                class="nav-link active"
                aria-expanded="true"
                data-toggle="tab"
                href="#tab-1"
              >Description</a>
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                aria-expanded="false"
                data-toggle="tab"
                href="#tab-2"
              >Specification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-expanded="false" data-toggle="tab" href="#tab-3">Reviews</a>
            </li> -->
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="tab-1" aria-expanded="true">
              <p>{{service.description}}</p>
              <!-- <p class="mb-0">The dumbbell material : outside is rubber,inside is cast iron . the weigth is enough .5kg is 5kg ,10kg is 10kg .we also can make client's logo on the cover.</p> -->
            </div>
            <!-- <div class="tab-pane fade" id="tab-2" aria-expanded="false">
              <p class="mb-0">
                - Silver, space silver, 1.48 inch TFT LCD capacitive touch screen, 128*128 pixels Resolution; Dial- Plastic; Strap- Flexible &amp; durable
                - Bluetooth 4.0, Magnetic charging cable (2 m), Sport Band
                - Retina display with Force Touch, Sport Band with stainless steel pin, Composite back, accelerometer
              </p>
            </div>
            <div class="tab-pane fade" id="tab-3" aria-expanded="false">
              <p class="mb-0">If you are willing to buy this watch then just order it right away without any second thought. This is a watch with great tools on it. So the internals had to be pretty good. It is a watch worth every penny. I used it on a daily basis for a pretty long time and it didn't lag even once and still works like charm.</p>
            </div> -->
          </div>
        </div>
      </div>
      <!-- tab-style closed -->
      <div class="related-post section-gap bg-light">
        <div class="section-title-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6 mx-auto text-center">
                <h2>Other Services</h2>
                <!-- <p
                  class="mb-0 lead"
                >We are driven by creating experiences that deliver results for your business and for your consumers.</p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="container row mx-auto">
          <!-- <RelatedProducts></RelatedProducts> -->
          <div class="col-sm-6 col-md-6 col-lg-4 mb-3" v-for="(service,index) of otherServices" :key="index">
            <service-card :service="service" />
          </div>
        </div>
      </div>
      <!-- related post closed -->
      <!-- <div class="our-support py-5 bg-gray-dark">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-sm-12 col-md-4">
              <div class="border-0 rounded-0 text-center">
                <div class="card-body p-4">
                  <div class="icon mb-3">
                    <span>
                      <i class="ion-ios-globe font-4x text-white"></i>
                    </span>
                  </div>
                  <h3 class="text-capitalize mb-4 text-white">Free Delivery</h3>
                  <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="border-0 rounded-0 text-center">
                <div class="card-body p-4">
                  <div class="icon mb-3">
                    <span>
                      <i class="ion-ios-sync font-4x text-white"></i>
                    </span>
                  </div>
                  <h3 class="text-capitalize mb-4 text-white">Refund &amp; Return</h3>
                  <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="border-0 rounded-0 text-center">
                <div class="card-body p-4">
                  <div class="icon mb-3">
                    <span>
                      <i class="ion-ios-chatboxes font-4x text-white"></i>
                    </span>
                  </div>
                  <h3 class="text-capitalize mb-4 text-white">24X7 Support</h3>
                  <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- our support closed -->
      <!-- <div class="accordion-wrapper section-gap">
        <div class="container">
          <div id="accordion" role="tablist">

				<div class="section-title-wrapper">
				<div class="row">
					<div class="col-sm-12 col-md-6 mx-auto text-center">
						<h2>Frequently Asked Questions</h2>
						<p class="mb-0 lead">We are driven by creating experiences that deliver results for your business and for your consumers.</p>
					</div>
				</div>
			</div> 

           
            <div class="simple-line-accordion pt-1">
              <div class="card">
                <div class="card-header" role="tab" id="headingOne">
                  <h2 class="mb-0 font-2x">
                    <a
                      class="accordion-toggle"
                      data-toggle="collapse"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >Collapsible Group Item #1</a>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div
                    class="card-body"
                  >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab" id="headingTwo">
                  <h2 class="mb-0 font-2x">
                    <a
                      class="collapsed accordion-toggle"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >Collapsible Group Item #2</a>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div
                    class="card-body"
                  >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab" id="headingThree">
                  <h2 class="mb-0 font-2x">
                    <a
                      class="collapsed accordion-toggle"
                      data-toggle="collapse"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >Collapsible Group Item #3</a>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div
                    class="card-body"
                  >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- container closed -->
    </div>
    <!-- product wrapper closed -->
  </div>
</template>
<script>
import services from '@/assets/json/services.json'
import ServiceCard from '@/components/Service/ServiceCard'
import {mapGetters} from 'vuex'
import EventBus from '@/plugins/eventBus'
export default {
  components: {
    ServiceCard
  },
  created(){
    if(!this.service) this.$router.push({name: 'Services'})
  },
  computed:{
    ...mapGetters('AUTH', ['isLogged', 'user']),
    service(){
      if(!this.$route.params.serviceCode) return null
      return services.find(s => s.code == this.$route.params.serviceCode)
    },
    otherServices(){
      if(!this.service) return []
      return services.filter(s => s.code != this.service.code)
    },
  },
  methods:{
    getServiceBanner(name){
      return require('../../assets/images/banners/'+name)
    },
    openLogin(){
      EventBus.$emit('open-login')
    },
    gotoMessage(){
      this.$router.push({name: 'Message'})
    },
  },
};
</script>


<style lang="sass" scoped>
.buy-btn
  width: 150px
</style>