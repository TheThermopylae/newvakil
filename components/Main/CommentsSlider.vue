<template>
  <swiper
    :slidesPerView="4.2"
    :spaceBetween="30"
    class="mySwiper !pr-2 lg:!pr-4 xl:!pr-5 2xl:!pr-[90px] !py-10"
  >
    <swiper-slide v-for="item in 10"
      ><MainCommentsCard></MainCommentsCard
    ></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

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
