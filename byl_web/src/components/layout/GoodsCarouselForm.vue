<template>
  <v-container class="carousel-container">
    <div class="carousel-title">이 달의 추천 굿즈</div>
    <carousel-form-3
        :items="goodsItems"
        itemWidth="200px"
        itemHeight="200px"
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
import CarouselForm3 from '@/components/layout/reusableOrigin/CarouselForm3.vue'

export default {
  name: "GoodsCarouselForm",
  components: { CarouselForm3 },
  data() {
    return {
      goodsItems: [
        { src: require("@/assets/product/goods/fangoods/fangoods_1.jpg"), title: "굿즈 1번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_2.jpg"), title: "굿즈 2번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_3.jpg"), title: "굿즈 3번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_4.jpg"), title: "굿즈 4번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_5.jpg"), title: "굿즈 5번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_6.jpg"), title: "굿즈 6번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_7.jpg"), title: "굿즈 7번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_8.jpg"), title: "굿즈 8번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_9.jpg"), title: "굿즈 9번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_10.jpg"), title: "굿즈 10번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_11.jpg"), title: "굿즈 11번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_12.jpg"), title: "굿즈 12번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_13.jpg"), title: "굿즈 13번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_14.jpg"), title: "굿즈 14번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_15.jpg"), title: "굿즈 15번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_16.jpg"), title: "굿즈 16번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_17.jpg"), title: "굿즈 17번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_18.jpg"), title: "굿즈 18번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_19.jpg"), title: "굿즈 19번", },
        { src: require("@/assets/product/goods/fangoods/fangoods_20.jpg"), title: "굿즈 20번", }
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

<style>

.carousel-container {
  margin: 50px 0 50px 0;
}

.carousel-title {
  font-size: 30px;
}

</style>