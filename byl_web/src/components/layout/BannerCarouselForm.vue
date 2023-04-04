<template>
  <div>
    <carousel-form-1
        :items="bannerItems"
        :itemLimit=11
        carouselHeight="50vh"
        :cycle="true"
        :hide-delimiters="true"
      />
  </div>
</template>

<script>
import CarouselForm1 from '@/components/layout/reusableOrigin/CarouselForm1.vue'

export default {
  name: "BannerCarouselForm",
  components: { CarouselForm1 },
  data() {
    return {
    bannerItems: [
        { src: require("@/assets/carousel/test_1.jpg") },
        { src: require("@/assets/carousel/test_2.jpg") },
        { src: require("@/assets/carousel/test_3.jpg") },
        { src: require("@/assets/carousel/test_4.jpg") },
        { src: require("@/assets/carousel/test_5.jpg") },
        { src: require("@/assets/carousel/test_6.jpg") },
        { src: require("@/assets/carousel/test_7.jpg") },
        { src: require("@/assets/carousel/test_8.jpg") },
        { src: require("@/assets/carousel/test_9.jpg") },
        { src: require("@/assets/carousel/test_10.jpg") },
        { src: require("@/assets/carousel/test_gif_1.gif") }
        ]
      }
    }
  }
</script>

<style>

</style>