<template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-between">
      <div class="col-lg-1 offset-0 offset-lg-1">
        <div class="swiper-button-prev">
          <span class="material-icons-outlined fs-32">
            west
          </span>
        </div>
      </div>
      <div class="col-lg-8">
        <swiper
          :grabCursor="true"
          :centeredSlides="true"
          :free-mod="true"
          :spaceBetween="44"
          :slidesPerView="1"
          :initialSlide="1"
          :slideToClickedSlide="true"
          :grid="{
            rows: 2,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
          '576': {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            },
          '768': {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            },
          '992': {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            },
          '1400': {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            pagination: {
            clickable: true,
            }
            },
          }"
          class="destinationSwiper"
        >
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Thailand</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">France</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Australia</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Malaysia</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Indonesia</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">UAE</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Other</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Other</p></swiper-slide>
          <swiper-slide><p class="text-white fs-24 text-center fw-bold pt-61">Other</p></swiper-slide>
        </swiper>
      </div>
      <div class="col-1">
        <div class="swiper-button-next ms-auto">
          <span class="material-icons-outlined fs-32">
            east
          </span>
        </div>
      </div>
      <div class="col-0 col-lg-1"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import '../assets/components/DestinationSwiper.scss'

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