<template>
  <div class="row col-space">
    <div class="col-sm-12 col-md-6 col-xl-4" v-for="item of service.data" :key="item.title">
      <div class="rotate-item rounded-border" :class="item.icon.color">
        <div class="overlay-wrap">
          <div class="thumb-wrap">
            <div class="front-wrap">
              <!-- <div class="featured-thumb">
              </div> -->
              <div class="front-wrap-info">
                <i class="font-4x text-white mb-1" :class="item.icon.name"></i>
                <h5 class="mb-0 info-title text-white">{{item.title}}</h5>
              </div>
            </div>
            <div class="back-wrap">
              <div class="back-wrap-info">
                <div class="sec-content">
                  <p class="text-white mb-0">{{item.content}}</p>
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
import service from "Components/data/service.json";
export default {
  data() {
    return {
      service
    };
  }
};
</script>


