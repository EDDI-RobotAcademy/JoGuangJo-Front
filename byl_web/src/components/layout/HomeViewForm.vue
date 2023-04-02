<template>
    <div>
      <!-- 회사 소개 캐러셀 -->
      <banner-carousel-form
        :items="carousel1Items"
        :itemLimit=11
        carouselHeight="50vh"
      />

      <!-- 이달의 추천 책 캐러셀 -->
      <book-carousel-form
        :items="carousel2Items"
        cardWidth="200px"
        cardHeight="260px"
        carouselHeight="400px"
      />

      <!-- 이달의 추천 굿즈 캐러셀 -->
      <goods-carousel-form
        :items="carousel3Items"
        cardWidth="200px"
        cardHeight="200px"
        carouselHeight="400px"
      />

    </div>
  </template>
  
  <script>
    import BannerCarouselForm from "@/components/layout/carousel/BannerCarouselForm.vue";
    import BookCarouselForm from '@/components/layout/carousel/BookCarouselForm.vue';
    import GoodsCarouselForm from '@/components/layout/carousel/GoodsCarouselForm.vue';
  
  export default {
    name: "MainPageForm",
    components: {
        BannerCarouselForm,
        BookCarouselForm,
        GoodsCarouselForm
    },
    data() {
      return {
        carousel1Items: [
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
        ],
        carousel2Items: [
        { src: require("@/assets/product/book/book_1.jpg"), title: "책 1번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_2.jpg"), title: "책 2번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_3.jpg"), title: "책 3번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_4.jpg"), title: "책 4번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_5.jpg"), title: "책 5번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_6.jpg"), title: "책 6번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_7.jpg"), title: "책 7번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_8.jpg"), title: "책 8번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_9.jpg"), title: "책 9번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_10.jpg"), title: "책 10번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_11.jpg"), title: "책 11번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_12.jpg"), title: "책 12번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_13.jpg"), title: "책 13번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_14.jpg"), title: "책 14번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_15.jpg"), title: "책 15번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_16.jpg"), title: "책 16번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_17.jpg"), title: "책 17번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_18.jpg"), title: "책 18번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_19.jpg"), title: "책 19번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/book/book_20.jpg"), title: "책 20번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" }
        ],
        carousel3Items: [
        { src: require("@/assets/product/goods/fangoods/fangoods_1.jpg"), title: "굿즈 1번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_2.jpg"), title: "굿즈 2번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_3.jpg"), title: "굿즈 3번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_4.jpg"), title: "굿즈 4번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_5.jpg"), title: "굿즈 5번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_6.jpg"), title: "굿즈 6번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_7.jpg"), title: "굿즈 7번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_8.jpg"), title: "굿즈 8번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_9.jpg"), title: "굿즈 9번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_10.jpg"), title: "굿즈 10번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_11.jpg"), title: "굿즈 11번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_12.jpg"), title: "굿즈 12번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_13.jpg"), title: "굿즈 13번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_14.jpg"), title: "굿즈 14번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_15.jpg"), title: "굿즈 15번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_16.jpg"), title: "굿즈 16번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_17.jpg"), title: "굿즈 17번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_18.jpg"), title: "굿즈 18번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_19.jpg"), title: "굿즈 19번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" },
        { src: require("@/assets/product/goods/fangoods/fangoods_20.jpg"), title: "굿즈 20번", cartBtn: "장바구니", buyBtn: "구매하기", likeBtn: "♥" }
        ],
    }
  }
};
</script>

<style>

</style>