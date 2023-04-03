<!-- 이 캐러셀은 화면 좌우를 여백 없이 꽉 채우는 디자인이라 배너용으로 적합합니다
공용 컴포넌트로 만들었기 때문에 다른 컴포넌트에서 import 할 때 props 설정만 바꿔주면 다양하게 재사용할 수 있습니다 -->
<template>
    <div>
      <v-carousel :cycle="true" :interval="interval" :width="carouselWidth" :height="carouselHeight" :hide-delimiters="hideDelimiters">
        <v-carousel-item v-for="(item, i) in items.slice(0, itemLimit)" :key="i">
          <v-img :src="item.src" class="banner-img" alt="banner-img" />
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarouselForm_1",
    props: {
      items: {
        type: Array,
        required: true
      },
      itemLimit: {
        type: Number,
        default: 10
      },
      carouselWidth: {
        type: String,
        default: "100vw"
      },
      carouselHeight: {
        type: String,
        default: "100vh"
      },
      cycle: {
        type: Boolean,
        default: true
      },
      interval: {
       type: Number,
       default: 5000
      },
      hideDelimiters: {
        type: Boolean,
        default: true
      }
    }
  };
  </script>
  
  <style scoped>
  .banner-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  </style>
  