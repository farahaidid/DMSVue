<template>
  <div>
    <PageTitle
      headerTitle="Our Services"
      headerSubTitle="Get best quality services"
    ></PageTitle>
    <div class="product-wrapper shop-list load-more-contain section-gap">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-6 col-md-6 col-lg-4"
            v-for="(service,index) of services"
            :key="index"
          >
            <service-card :service="service" />
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import services from "@/assets/json/services";
import ServiceCard from '@/components/Service/ServiceCard'

export default {
  components:{
    ServiceCard
  },
  data() {
    return {
      services
    };
  },
  methods:{
    getImage(name){
      return require('../../assets/images/banners/'+name)
    },
  },
};
</script>
