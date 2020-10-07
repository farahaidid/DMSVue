<template>
  <div class="about">
    <PageTitle
      headerTitle="Know More About Us"
      headerSubTitle="Our latest news and learning articles."
    ></PageTitle>

    <VideoSection></VideoSection>
    <!-- <div class="service section-gap pt-5">

			<div class="container">
				<ServiceSection />
			</div>
    </div>-->
    <OurMissionSection></OurMissionSection>
    <TeamGridV2></TeamGridV2>
    <TestimonialSlider></TestimonialSlider>
    <ContactInfo></ContactInfo>
    <div class="send-msg-form bg-gray-dark style-form">
      <div class="py-6">
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
  </div>
</template>
<script>
import VideoSection from "Components/Sections/VideoSection.vue";
import ServiceSection from "Components/Sections/ServiceSection.vue";
import OurMissionSection from "Components/Sections/OurMissionSection.vue";
import TeamGridV2 from "Components/Sections/TeamGridV2.vue";
import TestimonialSlider from "Components/Sections/TestimonialSlider.vue";
import ContactInfo from "Components/Sections/ContactInfo.vue";
import SendMessage from "Components/Sections/SendMessage.vue";

export default {
  components: {
    VideoSection,
    ServiceSection,
    OurMissionSection,
    TeamGridV2,
    TestimonialSlider,
    ContactInfo,
    SendMessage
  }
};
</script>
