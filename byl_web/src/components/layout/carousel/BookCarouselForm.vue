<!-- 이 캐러셀은 한 슬라이드에 여러 이미지가 보이는 디자인이라 책 DP용으로 적합합니다
공용 컴포넌트로 만들었기 때문에 다른 컴포넌트에서 import 할 때 props 설정만 바꿔주면 다양하게 재사용할 수 있습니다 -->
<template>
  <v-container>
    <v-carousel cycle="cycle" :interval="interval" :width="carouselWidth" :height="carouselHeight" hide-delimiters="hideDelimiters">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-row class="justify-space-around no-gutters">
          <v-col v-for="(item, j) in slide" :key="j" cols="auto">
            <div class="centered-content">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card :width="cardWidth" :height="cardHeight">
                <v-img :src="item.src" :alt="book-img" class="book-img"/>
              </v-card>
              <v-card-actions>
                <v-btn>{{ item.cartBtn }}</v-btn>
                <v-btn>{{ item.buyBtn }}</v-btn>
                <v-btn>{{ item.likeBtn }}</v-btn>
              </v-card-actions>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
  
<script>
export default {
    name: "BookCarouselForm",
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      itemsPerSlide: {
        type: Number,
        default: 5,
      },
      carouselWidth: {
        type: String,
        default: "100vw",
      },
      carouselHeight: {
        type: String,
        default: "50vh",
      },
      cardWidth: {
        type: String,
        default: "300px",
      },
      cardHeight: {
        type: String,
        default: "400px",
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
    },
    computed: {
      slides() {
        const slides = [];
        for (let i = 0; i < this.items.length; i += this.itemsPerSlide) {
          slides.push(this.items.slice(i, i + this.itemsPerSlide));
        }
        return slides;
      },
    },
  };
</script>
  

<style scoped>

.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

</style>