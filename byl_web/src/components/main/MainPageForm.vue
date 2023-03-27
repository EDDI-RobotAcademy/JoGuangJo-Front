<template> 
  <div class="main-page">

    <v-carousel cycle hide-delimiters height="500" :interval="5000" class="carosel">
      <v-carousel-item v-for="(item, i) in items.slice(0, 5)" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>


    <v-container>
  <v-row>
    <v-col cols="12" sm="6" class="text-center"><br>
     <h2 class="title">책을 기부하는 이유</h2><br>
      <p class="description">
       책 기부는 도서의 기부 및 새로운 도서를 제공하여 많은 이들이 책을 읽을 수 있는 기회를 제공합니다.
      </p><br>
     <v-btn color="white" text-color="black" rounded href="/donate-choice" class="ml-0">책 기부하러 가기</v-btn>
    </v-col>
    <v-col cols="12" sm="1" class="d-flex align-center justify-center">
      <v-divider vertical style="border-width: 1px;" color="black"></v-divider>
    </v-col>
    <v-col cols="12" sm="5" class="text-center">
      <h2 class="title">책기부현황</h2>
      <div class="chart-container">
        <!-- 그래프 코드 -->
      </div>
    </v-col>
  </v-row>



  <v-row justify="space-between" align="center">
  <v-col cols="6" sm="6" class="text-left">
    <h2 class="title">추천 굿즈 랭킹</h2>
  </v-col>
  <v-col cols="6" sm="6" class="text-right">
    <v-btn color="white" text-color="black" class="mt-2" rounded href="/product-list">더보기</v-btn>
  </v-col>
</v-row>

<v-carousel cycle height="300" :interval="5000" hide-delimiters>
  <v-carousel-item v-for="n in Math.ceil(goodsItems.length / 3)" :key="n">
    <v-row justify="center">
      <v-col cols="4" v-for="(item, i) in goodsItems.slice((n - 1) * 3, n * 3)" :key="i">
        <v-card>
          <v-img :src="item.img" :alt="`굿즈 이미지 ${i + 1}`" height="200"></v-img>
          <v-card-text class="text-center">
            <p class="goods-name">{{ item.name }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-carousel-item>
</v-carousel>

  <v-row justify="space-between" align="center">
  <v-col cols="6" sm="6" class="text-left">
    <h2 class="title">추천 도서</h2>
  </v-col>
  <v-col cols="6" sm="6" class="text-right">
    <v-btn color="white" text-color="black" rounded href="#">더보기</v-btn>
  </v-col>
</v-row>
<v-carousel cycle height="300" :interval="5000" hide-delimiters>
  <v-carousel-item v-for="(item, i) in bookItems" :key="i">
    <v-row justify="center">
      <v-col cols="4" v-for="(item, i) in bookItems.slice(i, i + 3)" :key="i">
        <v-card>
          <v-img :src="item.img" :alt="`책 이미지 ${i + 1}`" height="200"></v-img>
          <v-card-text class="text-center">
            <p class="book-name">{{ item.name }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-carousel-item>
</v-carousel><br><br><br>


      <v-row justify="center">
  <v-col cols="12" sm="6" class="pr-4">
    <v-card class="pa-3">
      <v-row class="d-flex align-center">
        <v-icon class="mr-2">mdi-bell-ring-outline</v-icon>
        <h2 class="subtitle-1 font-weight-bold">공지사항</h2>
      </v-row>

      <v-list dense>
        <v-list-item v-for="(item, i) in noticeItems" :key="i" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
  <v-col cols="12" sm="6" class="pl-4">
    <v-card class="pa-3">
      <v-row class="d-flex align-center">
        <v-icon class="mr-2">mdi-map-marker</v-icon>
        <h2 class="subtitle-1 font-weight-bold">오시는길</h2>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <p>주소: 서울특별시 강남구 테헤란로14길 6 남도빌딩 KH정보교육원</p>
      <p>전화번호: 02-1234-5678</p>
    </v-card>
  </v-col>
</v-row>


    </v-container>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "MainPageForm",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      items: [
        { src: 'https://www.museum.go.kr/uploadfile/ecms/visual/1063745.jpg?_=1679573931674' },
        { src: 'https://www.museum.go.kr/uploadfile/ecms/visual/1065969.jpg?_=1679584685009' },
        { src: 'https://www.museumshop.or.kr/center/files/visual/2023-%EB%B4%84%EA%B8%B0%ED%9A%8D%EC%A0%84_1300_420_1.jpg' },
      ],
      goodsItems: [
        { img: "https://www.museumshop.or.kr/center/files/good/202303071634430287100.jpg", name: "굿즈 1" },
        { img: "https://www.museumshop.or.kr/center/files/good/202302212018540141100.jpg", name: "굿즈 2" },
        { img: "http://image.yes24.com/goods/115630461/XL", name: "굿즈 3" },
        { img: "http://image.yes24.com/goods/112585206/XL", name: "굿즈 4" },
        { img: "http://image.yes24.com/goods/116046541/L", name: "굿즈 5" },
        { img: "http://image.yes24.com/goods/114649438/XL", name: "굿즈 6" },
      ],
      bookItems: [
        { img: "http://image.yes24.com/goods/104847369/XL", name: "책 1" },
        { img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190357968.jpg", name: "책 2" },
        { img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788986089295.jpg", name: "책 3" },
        { img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791163032212.jpg", name: "책 4" },
        { img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158393021.jpg", name: "책 5" },
        { img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162245651.jpg", name: "책 6" },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #ffffff;
}

.logo-search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo img {
  max-height: 50px;
  margin-right: 20px;
}

.search {
  color: white;
}

.search .v-text-field {
  background-color: rgba(255, 255, 255, 0.2);
}

.search .v-text-field .v-input__slot {
  color: white;
}

.search .v-text-field .v-input__icon--append {
  color: white;
}
.carosel {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 30px;
  margin-top: -10px;
}
.ml-0 {
  margin-right: -400px;
}
.text-left {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 50px;
  margin-left: -200px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 0px;
}

.goods-name,
.book-name {
  font-size: 1.2rem;
  margin: 0;
}
</style>
