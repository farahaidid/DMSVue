<template>
  <div class="section-heading section-gap">
    <div class="bg-after"></div>
    <div class="text-center section-title-content">
      <div class="container">
        <h1 class="mb-3 text-white">{{headerTitle}}</h1>
        <p class="lead text-white">{{headerSubTitle}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["headerTitle", "headerSubTitle"]
};
</script>