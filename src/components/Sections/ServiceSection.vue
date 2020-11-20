<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-xl-4" v-for="(service, sI) of services" :key="sI" @click="gotoServiceDetails(service)">
      <div class="rotate-item rounded-border bg-transparent service-item mb-2">
        <div class="overlay-wrap h-100">
          <div class="thumb-wrap h-100">
            <div class="front-wrap h-100">
              <!-- <div class="featured-thumb">
              </div> -->
              <div class="front-wrap-info h-100" :style="{backgroundImage: `url(${getBannerImage(service.banner)})`}">
                <!-- <i class="font-4x text-white mb-1" :class="item.icon.name"></i> -->
              </div>
            </div>
            <div class="back-wrap">
              <div class="back-wrap-info">
                <div class="sec-content">
                  <h5 class="mb-0 mt-auto info-title text-primary">{{service.title}}</h5>
                  <p class="text-white mb-0">{{service.description}}</p>
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
import services from "@/assets/json/services.json";
export default {
  data() {
    return {
      services
    };
  },
  methods:{
    getBannerImage(name){
      return require('../../assets/images/banners/'+name)
    },
    gotoServiceDetails(service){
      this.$router.push({
        name: 'ServiceDetails',
        params:{
          serviceCode: service.code
        }
      })
    },
  },
};
</script>

<style lang="sass" scoped>
.service-item
  height: 200px 
.front-wrap-info
  background-size: 100% 100%
</style>
