<template>
  <div class="main-page">
    <v-carousel cycle hide-delimiters height="500" :interval="5000">
      <v-carousel-item v-for="(item, i) in items.slice(0, 5)" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>


    <v-container>
  <v-row>
    <v-col cols="12" sm="6" class="text-center">
     <h2 class="title">책기부하는 이유</h2>
      <p class="description">
       책기부는 도서의 기부 및 새로운 도서를 제공하여 많은 이들이 책을 읽을 수 있는 기회를 제공합니다.
      </p>
     <v-btn elevation="1" rounded href="/donate-choice" class="ml-0">책 기부하러 가기</v-btn>
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
    <v-btn color="primary" class="mt-2" href="#">더보기</v-btn>
  </v-col>
</v-row>

<v-carousel cycle height="300" :interval="5000" hide-delimiters>
  <v-carousel-item v-for="(item, i) in goodsItems" :key="i">
    <v-row justify="center">
      <v-col cols="4" v-for="(item, i) in goodsItems.slice(i, i + 3)" :key="i">
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
       <v-btn color="primary" class="mt-2" href="#">더보기</v-btn>
       </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="4" v-for="(item, i) in bookItems" :key="i">
          <v-card>
            <v-img :src="item.img" :alt="`책 이미지 ${i + 1}`" height="300px"></v-img>
            <v-card-text class="text-center">
              <p class="book-name">{{ item.name }}</p>
            </v-card-text>
          </v-card>
        </v-col> 
      </v-row>

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
        { src: 'https://www.beautifulstore.org/wp-content/uploads/2020/08/230125_%E1%84%89%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A5-pc.jpg' },
      ],
      goodsItems: [
        { img: "https://www.museumshop.or.kr/center/files/good/202303071634430287100.jpg", name: "굿즈 1" },
        { img: "https://www.museumshop.or.kr/center/files/good/202302212018540141100.jpg", name: "굿즈 2" },
        { img: "https://via.placeholder.com/300x300", name: "굿즈 3" },
        { img: "https://via.placeholder.com/300x300", name: "굿즈 4" },
        { img: "https://via.placeholder.com/300x300", name: "굿즈 5" },
      ],
      bookItems: [
        { img: "https://via.placeholder.com/300x300", name: "책 1" },
        { img: "https://via.placeholder.com/300x300", name: "책 2" },
        { img: "https://via.placeholder.com/300x300", name: "책 3" },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.goods-name,
.book-name {
  font-size: 1.2rem;
  margin: 0;
}
</style>
