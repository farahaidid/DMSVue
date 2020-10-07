<template>
  <div>
    <PageTitle
      headerTitle="Our Latest Work"
      headerSubTitle="We build something great in the world."
    ></PageTitle>
    <div class="portfolio-wrapper port-v2 space-fix section-gap">
      <div class="container">
        <div class="row no-gutter">
          <div
            class="col-sm-12 col-md-6 col-lg-4"
            v-for="(portfolio,index) of portfoliov2.data"
            :key="index"
          >
            <div class="overlay-wrap">
              <div>
                <img
                  :src="portfolio.image_path"
                  width="500"
                  height="500"
                  class="img-fluid w-100"
                  alt="gallery images"
                />

                <div class="card-img-overlay primary-tp-layer text-center d-flex justify-content-center">
                  <div class="align-self-center">
                    <a :href="portfolio.image_path" data-fancybox="images" class>
                      <div class="ih-fade-down square-40 rounded-circle bg-white shadow-md">
                        <i class="fa fa-plus align-middle"></i>
                      </div>
                    </a>
                    <h3 class="mb-0 mt-4 text-white">{{ portfolio.title }}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-content">
              <div>
                <!-- <span class="font-small d-block mb-3">
                  <a href="javascript:void(0);">{{ portfolio.heading }}</a>
                </span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import portfoliov2 from "Components/data/portfolio-v2.json";
export default {
  data() {
    return {
      portfoliov2
    };
  }
};
</script>
