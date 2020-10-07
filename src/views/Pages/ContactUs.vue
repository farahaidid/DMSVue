<template>
  <div>
    <PageTitle
      headerTitle="Lets Get In Touch"
      headerSubTitle="Our latest news and learning articles."
    ></PageTitle>
    <div class="contact-widget section-gap">
      <div class="bg-success color-custom-height"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 my-3 text-center">
            <div class="contact-us-item">
              <div class="contact-us--icon">
                <i class="fa fa-phone transform-icon"></i>
              </div>
              <div class="contact-us--content">
                <h4 class="font-weight-med mb-4">Call us Any Time</h4>
                <p class="mb-1">
                  <a href="#">+0123 45678 90</a>
                </p>
                <p class="mb-0">
                  <a href="#">+0123 45678 90</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 my-3 text-center">
            <div class="contact-us-item">
              <div class="contact-us--icon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <div class="contact-us--content">
                <h4 class="font-weight-med mb-4">Drop us a Line</h4>
                <p class="mb-1">
                  <a href="mailto:support@theironnetwork.org">support@theironnetwork.org</a>
                </p>
                <p class="mb-0">
                  <a href="mailto:support@theironnetwork.org">loremipsum@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 my-3 text-center">
            <div class="contact-us-item">
              <div class="contact-us--icon">
                <i class="fa fa-map-marker"></i>
              </div>
              <div class="contact-us--content">
                <h4 class="font-weight-med mb-4">Office Location</h4>
                <p class="mb-1">
                  441 Stottle Rd, Scottsville
                  <br />NY, 14546
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-info section-gap bg-light">
      <div class="container">
        <div class="section-title-wrapper">
          <div class="row">
            <div class="col-sm-12 col-md-7 mx-auto text-center">
              <h2>Get In Touch With Us</h2>
              <p
                class="mb-0 lead"
              >From a team of passionate creators working side-by-side with our partners to deliver results.</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-7">
            <!-- Google Map -->
            <div class="google-maps">
              <div class="mapouter">
                <gmap-map
                  :center="center"
                  :zoom="9"
                  style="width: '300px'; height: 650px"
                  class="gmap_canvas"
                >
                  <gmap-marker
                    :position="markers.position"
                    :clickable="true"
                    :draggable="false"
                    @click="center=markers.position"
                  ></gmap-marker>
                </gmap-map>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-5 contact-frm">
            <SendMessage></SendMessage>
          </div>
        </div>
      </div>
    </div>
    <!-- <SocialIcons></SocialIcons> -->
  </div>
</template>
<script>
import contact from "Components/data/contact.json";
import SendMessage from "Components/Sections/SendMessage";
import SocialIcons from "Components/Sections/SocialIcons";
export default {
  data() {
    return {
      contact,
      center: { lat: 30.7, lng: 76.7 },
      markers: {
        position: { lat: 30.7, lng: 76.7 }
      }
    };
  },
  components: {
    SendMessage,
    SocialIcons
  }
};
</script>