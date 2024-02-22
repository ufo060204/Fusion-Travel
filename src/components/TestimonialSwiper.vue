<template>
  <swiper
    :grabCursor="true"
    :centeredSlides="true"
    :spaceBetween="22"
    :slideToClickedSlide="true"
    :pagination="{ 
      clickable: true,
      el: '.swiper-pagination',
    }"
    class="testimonialSwiper ps-md-0 pe-md-0 pe-lg-234 ps-lg-237"
  >
    <p class="fs-250 text-comma text-opacity-10 position-absolute fw-medium lh-1 top-0 top-lg-90px start-0">“</p>
    <SwiperSlide class="rounded-8">
      <div class="d-lg-flex pt-39 pb-51 ps-42 pe-28">
        <div class="w-100 w-lg-179px h-187px bg-secondary rounded-8 flex-shrink-0 me-41"></div>
        <div class="d-flex flex-column justify-content-between">
          <p class="text-intro">
            Integrate 360 campaign viral disrupt pair programming latte paradigm hacker 360 campaign cortado bootstrapping. Thinker-maker-doer paradigm affordances viral bootstrapping ship it human-centered design waterfall is so 2000 and late responsive integrate parallax.
          </p>
          <p class="text-primary fw-bold">Dimitri Vegasbr <br> <span class="text-intro fw-normal">London, England</span></p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="rounded-8">
      <div class="d-lg-flex pt-39 pb-51 ps-42 pe-28">
        <div class="w-100 w-lg-179px h-187px bg-secondary rounded-8 flex-shrink-0 me-41"></div>
        <div class="d-flex flex-column justify-content-between">
          <p class="text-intro">
            Integrate 360 campaign viral disrupt pair programming latte paradigm hacker 360 campaign cortado bootstrapping. Thinker-maker-doer paradigm affordances viral bootstrapping ship it human-centered design waterfall is so 2000 and late responsive integrate parallax.
          </p>
          <p class="text-primary fw-bold">Dimitri Vegasbr <br> <span class="text-intro fw-normal">London, England</span></p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="rounded-8">
      <div class="d-lg-flex pt-39 pb-51 ps-42 pe-28">
        <div class="w-100 w-lg-179px h-187px bg-secondary rounded-8 flex-shrink-0 me-41"></div>
        <div class="d-flex flex-column justify-content-between">
          <p class="text-intro">
            Integrate 360 campaign viral disrupt pair programming latte paradigm hacker 360 campaign cortado bootstrapping. Thinker-maker-doer paradigm affordances viral bootstrapping ship it human-centered design waterfall is so 2000 and late responsive integrate parallax.
          </p>
          <p class="text-primary fw-bold">Dimitri Vegasbr <br> <span class="text-intro fw-normal">London, England</span></p>
        </div>
      </div>
    </SwiperSlide>
    <p class="fs-250 text-comma text-opacity-10 position-absolute fw-medium lh-1 top-0 top-lg-374px end-0">“</p>
    <div class="swiper-pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import '../assets/components/TestimonialSwiper.scss'

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