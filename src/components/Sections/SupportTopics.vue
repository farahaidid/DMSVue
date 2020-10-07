<template>
  <div class="support-ques pt-5 mb-5">
    <div class="container" v-if="support.data.support_topics">
      <div class="row">
        <div
          class="col-sm-12 col-md-3 mb-3"
          v-for="(support,index) of support.data.support_topics"
          :key="index"
        >
          <div class="card text-center">
            <div class="card-body">
              <p class="mb-2">
                <i class="font-3x text-primary" :class="support.icon"></i>
              </p>
              <h5 class="mb-2">{{support.heading}}</h5>
              <p>
                <a href="#">See Articles</a>
              </p>
            </div>
          </div>
          <!-- <div v-for="(content,index) of support.content" :key="'1'+index">
                  <p class="font-sm"><a href="javascript:void(0)"> {{content}} </a></p>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import support from "Components/data/support.json";
export default {
  data() {
    return {
      support
    };
  }
};
</script>