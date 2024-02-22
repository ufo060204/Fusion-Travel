<template>
  <div class="container-fluid text-center">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :spaceBetween="22"
          :slideToClickedSlide="true"
          :initialSlide="1" 
          :pagination="{ 
            clickable: true,
            el: '.swiper-pagination',
          }"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          }"
          :breakpoints="{
          '576': {
            slidesPerView: 1,
            spaceBetween: 22,
            },
          '768': {
            slidesPerView: 2,
            spaceBetween: 22,
            },
          '992': {
            slidesPerView: 2,
            spaceBetween: 22,
            },
          '1400': {
            slidesPerView: 3,
            spaceBetween: 22,
            pagination: {
            clickable: true,
            }
            },
          }"
          class="welcomeSwiper"
        >
          <SwiperSlide class="rounded-8">
            <div class="d-flex align-items-center">
              <div class="text-start ps-57 pt-53">
                <span class="material-icons-outlined fs-40 fw-medium text-primary mb-30">
                  favorite
                </span>
                <h3 class="fs-18 text-title mb-30">Best Travel Agency</h3>
                <p class="fs-1597 text-explain">
                  User story Steve Jobs Stev <br> Jobs iterate human-centered <br> design iterate pair progra <br> ming 360 campaign.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="rounded-8">
            <div class="d-flex align-items-center">
              <div class="text-start ps-57 pt-53">
                <span class="material-icons-outlined fs-40 fw-medium text-primary mb-30">
                  star_border
                </span>
                <h3 class="fs-18 text-title mb-30">Trust & Safety</h3>
                <p class="fs-1597 text-explain">
                  Thought leader cortado viral <br> viral earned media long <br> shadow actionable insight
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="rounded-8">
            <div class="d-flex align-items-center">
              <div class="text-start ps-57 pt-53">
                <span class="material-symbols-outlined fs-40 fw-medium text-primary mb-30">
                  travel
                </span>
                <h3 class="fs-18 text-title mb-30">Best Price Guarantee</h3>
                <p class="fs-1597 text-explain">
                  SpaceTeam bootstrapping <br> user centered design sticky <br> note convergence fund 
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow';
import '../assets/components/WelcomeSwiper.scss'

export default {
  components: {
    Swiper, SwiperSlide
  },
  setup () {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>