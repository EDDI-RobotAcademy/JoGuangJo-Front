<template>
  <v-container class="carousel-container">
    <div class="carousel-title">이 달의 추천 책</div>
    <carousel-form-2
        :items="bookItems"
        itemWidth="200px"
        itemHeight="260px"
        carouselHeight="400px"
        :cycle="true"
        :hide-delimiters="true"
        @see="handleSee"
        @add-to-cart="handleAddToCart"
        @buy="handleBuy"
        @like="handleLike"
      />
  </v-container>
</template>

<script>
import CarouselForm2 from '@/components/layout/reusableOrigin/CarouselForm2.vue'

export default {
  name: "BookCarouselForm",
  components: { CarouselForm2 },
  data() {
    return {
      bookItems: [
        { src: require("@/assets/product/book/book_1.jpg"), title: "책 1번", },
        { src: require("@/assets/product/book/book_2.jpg"), title: "책 2번", },
        { src: require("@/assets/product/book/book_3.jpg"), title: "책 3번", },
        { src: require("@/assets/product/book/book_4.jpg"), title: "책 4번", },
        { src: require("@/assets/product/book/book_5.jpg"), title: "책 5번", },
        { src: require("@/assets/product/book/book_6.jpg"), title: "책 6번", },
        { src: require("@/assets/product/book/book_7.jpg"), title: "책 7번", },
        { src: require("@/assets/product/book/book_8.jpg"), title: "책 8번", },
        { src: require("@/assets/product/book/book_9.jpg"), title: "책 9번", },
        { src: require("@/assets/product/book/book_10.jpg"), title: "책 10번", },
        { src: require("@/assets/product/book/book_11.jpg"), title: "책 11번", },
        { src: require("@/assets/product/book/book_12.jpg"), title: "책 12번", },
        { src: require("@/assets/product/book/book_13.jpg"), title: "책 13번", },
        { src: require("@/assets/product/book/book_14.jpg"), title: "책 14번", },
        { src: require("@/assets/product/book/book_15.jpg"), title: "책 15번", },
        { src: require("@/assets/product/book/book_16.jpg"), title: "책 16번", },
        { src: require("@/assets/product/book/book_17.jpg"), title: "책 17번", },
        { src: require("@/assets/product/book/book_18.jpg"), title: "책 18번", },
        { src: require("@/assets/product/book/book_19.jpg"), title: "책 19번", },
        { src: require("@/assets/product/book/book_20.jpg"), title: "책 20번", }
        ]
      }
    },
    methods: {
      handleSee(item) {
        console.log('See 보러가기:', item);
        // 캐러셀의 상품 이미지를 클릭하면 해당 상품 페이지로 이동하는 로직을 여기다 넣으세요
      },
      handleAddToCart(item) {
        console.log('Add to cart 장바구니 추가:', item);
        // 캐러셀의 상품 이미지 아래 있는 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 추가되는 로직을 여기다 넣으세요
      },
      handleBuy(item) {
        console.log('Buy 바로구매:', item);
        // 캐러셀의 상품 이미지 아래 있는 바로구매 버튼을 클릭하면 해당 상품 결제 페이지로 이동하는 로직을 여기다 넣으세요
      },
      handleLike(item) {
        console.log('Like 찜하기:', item);
        // 캐러셀의 상품 이미지 아래 있는 하트 버튼을 클릭하면 해당 상품이 찜하기 목록에 추가되는 로직을 여기다 넣으세요
      }
    }
  }
</script>

<style scoped>

.carousel-container {
  margin: 50px 0 50px 0;
}

.carousel-title {
  font-size: 30px;
}

</style>