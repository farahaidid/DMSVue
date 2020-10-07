<template>
  <div>
    <BlogBanner />
    <!-- Latest Blog Section -->
    <div class="load-more-contain section-gap">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 blog-content-col">
            <div  v-for="(sideBar,index) of blogsidebar.data" :key="index">
              <div class="row mb-3 align-items-center">
                <div class="col-sm-12 col-md-12">
                  <div class="mb-4">
                    <img
                      :src="sideBar.image_path"
                      width="900"
                      alt="blog-sidebar"
                      height="504"
                      class="img-fluid border-rad"
                    />
                 
                  </div>
                  <div class="blog-content mb-3">
                    <h3 class="mb-3">
                      <a href="javascript:void(0);" class="text-dark">{{sideBar.heading}}</a>
                    </h3>
                    <div class="blog-meta mb-2">
                      <a href="javascript:void(0)" class="mr-3 text-muted">
                        <i :class="sideBar.user_icon" class="fa text-primary mr-2"></i>
                        <span class="font-sm align-top">{{sideBar.user_name}}</span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <i class="fa text-primary fa-calendar-o mr-2"></i>
                        <span class="font-sm align-top">{{sideBar.date }}</span>
                      </a>
                    </div>
                    <p class="mb-0">{{sideBar.content}}</p>
                    <!-- <a href="javascript:void(0);" :class="sideBar.read_more_bgcolor" class="  btn btn-outline-secondary btn-chk-dark"> READ MORE </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="blog-sidebar">
              <div class="card border-rad mb-5">
                <div class="py-4 px-3">
                  <h4 class="mb-3">Search</h4>
                  <Search></Search>
                </div>
              </div>
              <div>
                <Category></Category>
              </div>
              <div>
                <PopularPosts></PopularPosts>
              </div>
              <div>
                <InstagramGallary></InstagramGallary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import BlogBanner from "Components/Banner/BlogBanner";
import blogsidebar from "Components/data/blog-sidebar.json";
import Search from "Components/Widgets/Search";
import Category from "Components/Widgets/Category";
import PopularPosts from "Components/Widgets/PopularPosts";
import InstagramGallary from "Components/Widgets/InstagramGallary";
export default {
  data() {
    return {
      blogsidebar
    };
  },
  components: {
    Search,
    Category,
    PopularPosts,
    InstagramGallary,
    BlogBanner
  }
};
</script>
