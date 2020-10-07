<template>
  <div class="our-mission bg-light section-gap">
    <div class="container">
      <div class="row alt-col align-items-center" v-for="item of about.data" :key="item.heading">
        <div class="col-sm-12 col-md-12 col-lg-7">
          <div class="overlay-wrap">
            <img
              :src="item.image_path"
              width="370"
              height="300"
              alt="about-img"
              class="img-fluid w-100 border-rad shadow-md"
            />
            <div class="card-img-overlay primary-tp-layer pos-center text-center">
              <div class="center-holder">
                <a href="javascript:void(0)" class="ih-fade-right">
                  <i class="fa fa-arrow-right fa-3x fa-inverse"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5">
          <div class="about-content">
            <div class="mb-3">
              <h2 class="font-2x m-0">{{item.heading}}</h2>
            </div>
            <p class="mb-0">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "Components/data/about.json";
export default {
  data() {
    return {
      about
    };
  }
};
</script>