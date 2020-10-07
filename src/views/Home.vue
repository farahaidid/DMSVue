<template>
  <div>
    <Banner />
    <div class="service section-gap">
      <div class="container">
        <div class="section-title-wrapper">
          <div class="row">
            <div class="col-sm-12 col-md-6 mx-auto text-center">
              <h2>Best In Business</h2>
              <p class="mb-0 lead">Dicta eveniet quasi reiciendis qui eius voluptatum harum optio quibusdam illum.</p>
				          
            </div>
          </div>
        </div>
        <ServiceSection />
      </div>
    </div>
   

    <!-- <div class="feature-section section-gap  bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 align-self-center bg-img pr-5" style="padding-left:8rem">
            <h2 class="mb-3">How It Worked</h2>
            <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, repellendus. Voluptas expedita ducimus minima. amet consectetur adipisicing elit. Rem, repellendus. Voluptas expedita ducimus minim</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>

          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <div class="step-item step-1">
                  <div class="line-sep"></div>
                  <div class="step-item-content">
                    <div class="my-3">
                      <i class="icon font-2x ion-md-analytics"></i>
                    </div>
                    <div class="d-flex">
                      <div class="step-no">1</div>

                      <div>
                        <h4 class="mb-3">Analysis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt consectetur harum officiis soluta vitae amet fugit corrupti dolorem excepturi ipsa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="step-item step-2">
                  <div class="line-sep"></div>
                  <div class="step-item-content">
                    <div class="my-3">

							 <i class="icon font-2x ion-md-barcode"></i>
                    </div>
                    <div class="d-flex">
                      <div class="step-no">2</div>

                      <div>
                        <h4 class="mb-3">Implementation</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt consectetur harum officiis soluta vitae amet fugit corrupti dolorem excepturi ipsa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="step-item step-3">
                  <div class="line-sep"></div>
                  <div class="step-item-content">
                    <div class="my-3">
                      <i class="icon font-2x ion-md-umbrella"></i>
                    </div>
                    <div class="d-flex">
                      <div class="step-no">3</div>

                      <div>
                        <h4 class="mb-3">Support</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt consectetur harum officiis soluta vitae amet fugit corrupti dolorem excepturi ipsa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="mob-feature bg-light">
      <div class="section-gap">
        <div class="container">
       
          <MobileFeature />
        </div>
      </div>
    </div>
	  <div class="chk-video-section section-gap ">
      <div class="container">
        <VideoSectionV1 :videoContent="videoContent" />
      </div>
    </div>
    <div class="Gallery-grid section-gap bg-gray-dark">
      <div class="container">
        <div class="section-title-wrapper">
          <div class="row">
            <div class="col-sm-12 col-md-6 mx-auto text-center">
              <h2 class="text-white">Our Awesome Projects</h2>
              <p class="mb-0 text-white lead">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <PortfolioGrid :showNoOfPosts="6"></PortfolioGrid>
      </div>
    </div>
    <div class="post-section bg-light section-gap">
      <div class="container">
       <div class="section-title-wrapper">
          <div class="row">
            <div class="col-sm-12 col-md-6 mx-auto text-center">
              <h2>Our Recent Blogs</h2>
              <p class="mb-0 lead">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500
              </p>
            </div>
          </div>
        </div>
        <div class="card-deck">
          <LatestBlog></LatestBlog>
        </div>
      </div>
    </div>
    <TeamGrid></TeamGrid>
    <PricingV2></PricingV2>
    <TestimonialSlider></TestimonialSlider>

    <Subscriber />

    <div class="contact-section">
      <ContactInfo></ContactInfo>
    </div>
    <div class="send-msg-form bg-gray-dark style-form section-gap">

        <div class="container">
			<div class="section-title-wrapper">
				<div class="row">
					<div class="col-sm-12 col-md-6 mx-auto text-center">
						<h2>Send Us Message</h2>
						<p class="text-white mb-0 lead">We are driven by creating experiences that deliver results for your business.</p>
					</div>
				</div>
			</div>
          <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-7 mx-auto">
              <!-- <SendMessage></SendMessage> -->
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mb-4">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="inputEmail4"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-4">
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <textarea name id class="form-control form-control-lg" placeholder="Message"></textarea>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn text-white btn-success btn-block">Get in Touch</button>
              </form>
            </div>
          </div>
        </div>
  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscriber from "Components/Sections/Subscriber";
import Banner from "@/components/Banner/Banner.vue";
import ServiceSection from "Components/Sections/ServiceSection";
import TestimonialSlider from "Components/Sections/TestimonialSlider.vue";
import PricingV2 from "Components/Sections/PricingV2.vue";
import TeamGrid from "Components/Sections/TeamGrid.vue";
import MobileFeature from "Components/Sections/MobileFeature.vue";
import PortfolioGrid from "Components/Sections/PortfolioGrid.vue";
import LatestBlog from "Components/Sections/LatestBlog.vue";
import ContactInfo from "Components/Sections/ContactInfo.vue";
import SendMessage from "Components/Sections/SendMessage.vue";
import VideoSectionV1 from "Components/Sections/VideoSectionV1.vue";
import videoContent from "Components/data/home.json";

export default {
  data() {
    return {
      videoContent
    };
  },
  components: {
    Subscriber,
    Banner,
    ServiceSection,
    TestimonialSlider,
    PricingV2,
    TeamGrid, 	
    MobileFeature,
    PortfolioGrid,
    LatestBlog,
    ContactInfo,
    SendMessage,
    VideoSectionV1
  }
};
</script>
