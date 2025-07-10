<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    class="mySwiper !pr-2 lg:!pr-4 xl:!pr-5 2xl:!pr-[90px] !pb-96"
  >
    <swiper-slide v-for="item in 10" class="relative"
      ><MainLawyerCard></MainLawyerCard
    ></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {}
  }
}
</script>
