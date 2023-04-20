<template>
    <div>
      <div class="banner">
      <!-- 회사 소개 캐러셀 -->
      <banner-carousel-form/>
      </div>

      <!-- 이달의 추천 책 캐러셀 -->
      <book-carousel-form/>

      <!-- 이달의 추천 굿즈 캐러셀 -->
      <goods-carousel-form/>     
    </div>
  </template>
  
  <script>
    import BannerCarouselForm from "@/components/layout/BannerCarouselForm.vue";
    import BookCarouselForm from '@/components/layout/BookCarouselForm.vue';
    import GoodsCarouselForm from '@/components/layout/GoodsCarouselForm.vue';
  
  export default {
    name: "HomeViewForm",
    components: {
        BannerCarouselForm,
        BookCarouselForm,
        GoodsCarouselForm
    }
  }

</script>

<style scoped>
.btn {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
  }
  .btn-text {
    padding: 5px;
    margin-top: 2.5px;
}
</style>