<template>
    <div>
      <header-form/>

      <!-- 회사 소개 캐러셀 -->
      <banner-carousel-form/>

      <!-- 이달의 추천 책 캐러셀 -->
      <book-carousel-form/>

      <!-- 이달의 추천 굿즈 캐러셀 -->
      <goods-carousel-form/>
    </div>
  </template>
  
  <script>
    import HeaderForm from "@/components/layout/HeaderForm.vue";
    import BannerCarouselForm from "@/components/layout/BannerCarouselForm.vue";
    import BookCarouselForm from '@/components/layout/BookCarouselForm.vue';
    import GoodsCarouselForm from '@/components/layout/GoodsCarouselForm.vue';
  
  export default {
    name: "HomeViewForm",
    components: {
        HeaderForm,
        BannerCarouselForm,
        BookCarouselForm,
        GoodsCarouselForm
    }
  }

</script>

<style>

</style>