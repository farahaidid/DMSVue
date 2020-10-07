<template>
  <div>
    <PageTitle
      headerTitle="Thousands of Happy Users"
      headerSubTitle="Do you have any questions or need our help?"
    ></PageTitle>
    <div class="testimonial-wrapper section-gap">
      <div class="container">
        <div class="row">
          <div v-for="(user,index) of testimonial.data" :class="user.classes.colClass" :key="index">
            <div class="card-container mb-4">
              <div class="card border-rad">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-4">
                    <img
                      :src="user.avatar"
                      class="rounded-circle shadow-md"
                      width="60"
                      height="60"
                      alt="testimonial user thumb"
                    />
                    <h5 class="mx-3 mb-0">{{user.user_name}}</h5>
                  </div>

                  <div class="mb-2">
                    <h4 class="mb-2 text-primary">
                      <a class="text-primary" href="javascript:void(0);">"{{user.heading}}</a>
                    </h4>
                  </div>
                  <p class="font-italic">{{user.content}}</p>
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
import testimonial from "Components/data/testimonial.json";

export default {
  data() {
    return {
      testimonial
    };
  }
};
</script>
