<template>
  <div class="testimonial-center-slider bg-info section-gap">
    <div class="container">
      <div class="section-title-wrapper">
        <div class="row">
          <div class="col-sm-12 col-md-6 mx-auto text-center">
            <h2>Client's Words</h2>
            <p
              class="mb-0 lead"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatem possimus aperiam doloremque.</p>
          </div>
        </div>
      </div>
      <div class="testimonial-center">
        <Slick class="carousel" :options="slickOptions">
          <div ngxSlickItem v-for="(slide,i) of logoList" :key="i" class="slide">
            <div class="col-sm-12 col-md-9 mx-auto">
              <div class="carousel-item active text-center">
                <div class="bg-shadow"></div>
                <div class="testimonial-user mb-4">
                  <img
                    :src="slide.user_img"
                    class="img-fluid rounded-circle"
                    alt="testimonial user"
                    width="100"
                    height="100"
                  />
                </div>
                <p class="text-white text-center lead mb-4">{{slide.user_msg}}</p>
                <div class="mb-4 mt-5">
                  <span
                    class="text-white opacity-07 d-block mb-2 text-uppercase"
                  >{{slide.user_desi}}</span>
                  <h4 class="text-white mb-1 text-uppercase">{{slide.user_name}}</h4>
                </div>
              </div>
            </div>
          </div>
        </Slick>
      </div>
    </div>
    <!-- container closed -->
  </div>
</template>
<script>
import service from "Components/data/service.json";
import "slick-carousel/slick/slick.css";
import Slick from "vue-slick";
export default {
  components: {
    Slick
  },
  data() {
    return {
      service,
      logoList: [
        {
          user_img: "/static/img/1-team.jpg",
          user_msg:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupta.",
          user_desi: "Web Designer",
          user_name: "Jeremy Chavez"
        },
        {
          user_img: "/static/img/2-team.jpg",
          user_msg:
            "This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.",
          user_desi: "CEO, Watts",
          user_name: "Kerlina Watts"
        },
        {
          user_img: "/static/img/3-team.jpg",
          user_msg:
            "quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
          user_desi: "CEO, Hyrda",
          user_name: "Steave Rogers"
        }
      ],
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        fade: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  }
};
</script>
