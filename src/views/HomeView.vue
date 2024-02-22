<template>
  <main>
    <section class="vh-home mt-lg-100 pt-227 bg-secondary position-relative">
      <div class="text-center">
        <h1 class="fs-72 text-white fw-bold mb-30">Fusion Travel</h1>
        <p class="fs-20 text-white mb-30">Lets Discover The World Together</p>
        <a href="#" class="btn bg-primary border-primary rounded-pill text-white px-74 py-18 custom-link">Plan Your Trip</a>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-1 offset-1">
            <div class="position-absolute bottom-51px">
              <a href="#" class="d-flex align-items-center custom-link">
                <span class="material-icons-outlined me-10 fs-55 text-white">
                  play_circle
                </span>
                <div class="text-white">
                  <p class="fs-14 lh-1">Watch</p>
                  <p class="fs-18 fw-bold lh-1">Intro Video</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-150">
      <div class="container-fluid text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 mb-139">
            <h2 class="fs-50 fw-normal text-title mb-30">Welcome to Fusion</h2>
            <p class="text-explain">
              Nam consectetur elementum neque vitae condimentum. Aenean dignissim, turpis et tincidunt finibus, massa purus malesuada metus, a commodo velit magna nec nibh. Donec dictum fringilla tempus. Nunc rhoncus sapien lectus, non fermentum neque euismod quis. Phasellus sagittis tortor in accumsan 
            </p>
          </div>
        </div>
      </div>
      <WelcomeSwiper />
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 offset-2">
            <div class="pb-73 border-bottom border-divider"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-153 pb-85 border-bottom border-divider">
      <div class="container">
        <h2 class="text-center fs-50 fw-normal text-title mb-30">Find Your Destination</h2>
        <p class="text-center fs-20 text-intro mb-62">
          Most Popular Places Are Waiting For You
        </p>
        <div class="d-flex align-items-center justify-content-center mb-84">
          <span class="material-icons-outlined text-title fs-30">
            search
          </span>
          <span class="text-title fs-24">Search...</span>
          <input type="text" placeholder="請輸入搜尋項目">
        </div>
      </div>
      <DestinationSwiperVue />
    </section>

    <section class="container-fluid">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="pt-149 pb-85 border-bottom border-divider">
            <h2 class="text-center fs-50 fw-normal text-title mb-30">Latest News From Blog</h2>
            <p class="text-center fs-20 text-intro mb-62">
              See Whats People Are Sharing Their Thoughts
            </p>
            <div class="d-lg-flex flex-lg-row flex-column justify-content-between ">
              <div class="d-flex flex-column justify-content-between">
                <div class="bg-secondary h-475px mb-74"></div>
                <div class="d-flex flex-column-reverse flex-lg-row mb-74 mb-lg-0">
                  <div class="pt-22 pe-34 ps-28 pb-20 pb-lg-0 shadow w-100 w-lg-277px">
                    <h3 class="fs-20 text-title mb-30">
                      Most Beautiful Place In The World - Istunbul
                    </h3>
                    <p class="text-explain">
                      Venture capital food-truck minimum viable product ideate pitch deck experiential cortado affordances parallax
                    </p>
                  </div>
                  <div class="bg-secondary h-207px w-100 w-lg-277px flex-shrink-0"></div>
                </div>
              </div>
              <div>
                <div class="bg-secondary h-207px w-100 w-lg-286px"></div>
                <div class="pt-30 pb-52 pe-45 ps-46 shadow w-100 w-lg-286px mb-74">
                  <h3 class="fs-20 text-title mb-30 lh-30">
                    The Statue Of Liberty Travel
                  </h3>
                  <p class="text-explain lh-25">
                    Qualitative ship it user story grok SpaceTeam waterfall is so 2000 and late quantitative vs.
                  </p>
                </div>
                <div class="bg-secondary h-207px w-100 w-lg-286px flex-shrink-0 mb-74 mb-lg-0"></div>
              </div>
              <div>
                <div class="bg-secondary h-207px w-100 w-lg-286px mb-74"></div>
                <div class="bg-secondary h-207px w-100 w-lg-286px"></div>
                <div class="pt-30 pb-52 pe-45 ps-49 shadow w-100 w-lg-286px">
                  <h3 class="fs-20 text-title mb-30 lh-30">
                    The Best Natural Paradise - Shimla 
                  </h3>
                  <p class="text-explain lh-25">
                    Ship it integrate prototype fund human-centered design integrate big data convergence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-154 pb-162">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-8 offset-lg-2">
            <h2 class="text-center fs-50 fw-normal text-title mb-30">What Our Client Says</h2>
            <p class="text-center fs-20 text-intro">
              People’s sharing their thought about our works 
            </p>
            <TestimonialSwiper />
          </div>
        </div>
      </div>
    </section>

    <section class="py-100 bg-primary">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="d-lg-flex text-center justify-content-between">
              <p class="fs-40 text-white">Get special discount on your first journey</p>
              <a class="btn border border-white border-2 rounded-pill text-white px-74 py-18 btn-book" href="#">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import WelcomeSwiper from '@/components/WelcomeSwiper.vue';
import DestinationSwiperVue from '@/components/DestinationSwiper.vue';
import TestimonialSwiper from '@/components/TestimonialSwiper.vue';

export default {
  data () {
    return{}
  },
  components: {
    WelcomeSwiper, TestimonialSwiper, DestinationSwiperVue
  }
}
</script>

<style lang="scss" scoped>
.vh-home {
  height: calc(100vh - 100px);
}
.shadow {
  box-shadow: 0px 12px 59px 0px rgba(0,0,0,0.08);
}
.custom-link {
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
}
.btn-book {
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
}
</style>