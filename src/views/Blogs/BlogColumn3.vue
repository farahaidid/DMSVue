<template>
  <div>
    <PageTitle headerTitle="Latest Blog Post-3 Column" headerSubTitle="Build something incredible!"></PageTitle>
    <div class="post-section blog-v3 load-more-contain section-gap">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-12 col-md-6 col-lg-4"
            v-for="(post3Column,index) of blogColumn3.data"
            :key="index"
          >
            <div class="card border-0 border-rad mb-0">
              <img
                class="border-rad-top img-fluid w-100"
                :src="post3Column.image_path"
                alt="Card image cap"
                width="370"
                height="250"
              />
              <div class="card-body border-rad-bottom">
                <h4 class="card-title mb-2">
                  <a href="/blog-detail">{{post3Column.heading}}</a>
                </h4>
                <p class="card-text">{{post3Column.content}}</p>
                <div class="card-footer pt-2 p-0">
                  <div class="d-flex justify-content-between">
                    <a class="d-flex align-content-start text-muted">
                      <i :class="post3Column.user_icon" class="fa align-self-center mr-2"></i>
                      <span class="font-sm">{{post3Column.user_name}}</span>
                    </a>
                    <a class="d-flex align-content-end">
                      <i class="fa fa-calendar-o mr-2 align-self-center"></i>
                      <span class="font-sm text-capitalize">{{post3Column.date}}</span>
                    </a>
                  </div>
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
import blogColumn3 from "Components/data/blog-column3.json";

export default {
  data() {
    return {
      blogColumn3
    };
  }
};
</script>
