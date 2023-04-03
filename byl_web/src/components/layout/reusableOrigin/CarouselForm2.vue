<!-- 이 캐러셀은 한 슬라이드에 여러 이미지가 보이는 디자인이라 책 DP용으로 적합합니다
공용 컴포넌트로 만들었기 때문에 다른 컴포넌트에서 import 할 때 props 설정만 바꿔주면 다양하게 재사용할 수 있습니다 -->
<template>
    <div>
      <v-carousel :cycle="true" :interval="interval" :width="carouselWidth" :height="carouselHeight" :hide-delimiters="hideDelimiters">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-row class="justify-space-around no-gutters">
            <v-col v-for="(item, j) in slide" :key="j" cols="auto">
              <div class="centered-content">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card :width="itemWidth" :height="itemHeight">
                  <v-img @click="onSee(item)" :src="item.src" alt="item-img" class="item-img"/>
                </v-card>
                <v-card-actions>
                  <v-btn @click="onCartClick(item)" class="btn">장바구니</v-btn>
                  <v-btn @click="onBuyClick(item)" class="btn">바로구매</v-btn>
                  <v-btn @click="onLikeClick(item)" class="btn">♥</v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
    
<script>
  export default {
    name: "CarouselForm_2",
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
      itemWidth: {
        type: String,
        default: "300px",
      },
      itemHeight: {
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
    methods: {
      onSee(item) {
        this.$emit('see', item);
      },
      onCartClick(item) {
        this.$emit('add-to-cart', item);
      },
      onBuyClick(item) {
        this.$emit('buy', item);
      },
      onLikeClick(item) {
        this.$emit('like', item);
      },
    }
}
</script>
    
  
  <style scoped>
  
  .centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .item-img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }

  .btn {
    background-color: #fee789 !important;
    color: black;
  }

  .btn:hover {
    background-color: #FFC107 !important;
    color: white;
  }  
</style>