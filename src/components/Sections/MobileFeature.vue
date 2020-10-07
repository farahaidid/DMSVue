<template>
  <!-- Mobile Feature -->
  <div class="row align-items-center">
    <div class="col-sm-12 col-md-12 col-lg-6 text-center col-md-space">
		 <div class="show-img">
		 	<div class="top-left-bg"></div>
					<div class="bottom-right-bg"></div>
      <img
        src="/static/img/mob-img.jpg"
        alt="mobile feature"
        class="img-fluid"
        width="680"
        height="780"
      />
		</div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6">
      <h2 class="font-weight-bold mb-4">Why We are <span class="text-primary">Best</span>	for your <span class="text-primary">Project?</span></h2>
      <p
        class="lead"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quis molestias enim optio rerum. Accusantium nemo nisi eos tenetur. Aut quis molestias enim optio</p>
      <p class="mb-4">Tempora inventore tenetur necessitatibus possimus animi excepturi, voluptatem nostrum ea quia neque veniam adipisci dolor consectetur iure expedita corporis asperiores provident accusamus? Lorem ipsum dolor, sit amet consectetur elit.</p>
		<a href="#" class="btn btn-primary px-4 py-2 font-weight-bold">Read More</a>
    </div>
  </div>
</template>
<script>
import data from "Components/data/home.json";

export default {
  data() {
    return {
      data
    };
  }
};
</script>