<template>
  <div class="row align-items-center">
    <!-- Video Section -->
    <div
      class="col-sm-12 col-md-12 col-lg-6 col-xl-6 wow fadeIn animated pr-5"
      data-wow-duration="2s"
      data-wow-delay="3s"
    >
      <div class>
        <div class="section-title-wrapper mb-3">
          <h2 class="mb-4 font-weight-bold">{{videoContent.data.video_content.heading}}</h2>
          <p class="mb-4 lead">{{videoContent.data.video_content.short_content}}</p>
        </div>
        <ul class="pt-3 list-unstyled m-md-b step-count">
          <li v-for="(details,i) of videoContent.data.video_content.content"
            :key="i"
          >
            <div class="list-content">
              <div>
                <div class="num-value mr-3 font-weight-med">{{details.step}}</div>
              </div>
              <div class>
                <h4 class>{{details.title}}</h4>
                <p>{{details.desc}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="col-sm-12 col-md-12 col-lg-6 col-xl-6 wow fadeIn animated"
      data-wow-duration="2s"
      data-wow-delay="3s"
    >
      <div class="card border-0 text-white border-rad">
        <img
          class="card-img img-fluid border-rad"
          src="/static/img/hiw.jpg"
          alt="Card image"
          width="319"
          height="479"
        />
        <div class="card-img-overlay primary-tp-layer pos-center text-center border-rad">
          <div class="center-holder">
            <a data-fancybox :href="videoContent.data.video_content.video_link" class="play-button">
              <i>
                <span class="btn-text">
                  <span>Play</span>
                </span>
                <span class="btn-icon">
                  <i class="fa fa-play"></i>
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["videoContent"]
};
</script>