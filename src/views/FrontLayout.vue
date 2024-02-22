<template>
  <div class="d-flex flex-column vh-100">
    <header class="bg-secondary fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <nav class="navbar navbar-expand-lg h-lg-100px py-0 border-bottom border-header">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse py-0" id="navbarNav">
                <ul class="navbar-nav me-auto">
                  <li class="me-31">
                    <a class="text-white custom-link" href="#">Home</a>
                  </li>
                  <li class="me-31">
                    <a class="text-white custom-link" href="#">Services</a>
                  </li>
                  <li class="me-31">
                    <a class="text-white custom-link" href="#">About Us</a>
                  </li>
                  <li class="me-31">
                    <a class="text-white custom-link" href="#">Our Clients</a>
                  </li>
                  <li>
                    <a class="text-white custom-link" href="#">Blog</a>
                  </li>
                </ul>
                <a class="text-white d-flex align-items-center custom-link" href="tel:+516 260 0598">
                  <span class="material-icons fs-16 me-11">
                    call
                  </span>
                  <span>
                    Hotline: +516 260 0598
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <footer>
      <section class="pt-250 pb-57">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <ul class="d-lg-flex justify-content-between">
                <li>
                  <h3 class="fs-20 fw-medium text-title mb-30">About Us</h3>
                  <a href="#" class="fs-16 text-intro d-block custom-link">About Us</a>
                  <a href="#" class="fs-16 text-intro d-block custom-link">Blog</a>
                  <a href="#" class="fs-16 text-intro d-block custom-link">Contact Us</a>
                </li> 
                <li>
                  <h3 class="fs-20 fw-medium text-title mb-30">Address</h3>
                  <p href="#" class="fs-16 text-intro">4433 Heavner Court</p>
                  <p href="#" class="fs-16 text-intro">Plainview, New York</p>
                </li> 
                <li>
                  <h3 class="fs-20 fw-medium text-title mb-30">Contact Us</h3>
                  <a href="mailto:help@agency.com" class="fs-16 text-intro d-block custom-link ">Email: help@agency.com</a>
                  <a href="tel:+516 260 0598" class="fs-16 text-intro d-block custom-link ">Cell: +516-260-0598</a>
                </li> 
                <li class="me-44">
                  <h3 class="fs-20 fw-medium text-title mb-30">Follow Us</h3>
                  <a href="#" class="fs-16 text-intro me-10">
                    <img src="../assets/images/twitter.png" alt="twitter">
                  </a>
                  <a href="#" class="fs-16 text-intro me-10">
                    <img src="../assets/images/facebook.png" alt="facebook">
                  </a>
                  <a href="#" class="fs-16 text-intro">
                    <img src="../assets/images/instagram.png" alt="instagram">
                  </a>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid">
          <div class="row row justify-content-center">
            <div class="col-8">
              <p class="text-center fs-15 text-intro pt-59 pb-81 border-top divider-footer">Copyright@Parag 2016, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';

export default {
  data () {
    return {}
  },
  components: {
    RouterView
  }
}
</script>

<style lang="scss" scoped>
.custom-link {
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
}
</style>