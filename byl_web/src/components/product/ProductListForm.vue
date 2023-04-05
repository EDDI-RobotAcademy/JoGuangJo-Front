<template>
 <div class="product-list-form">
 <!--  <div class="sticky-bar">
      <p>최근 본 상품:</p>
      <ul>
        <li v-for="(item, i) in recentItems" :key="i">
          <img :src="item.img" :alt="`상품 이미지 ${i + 1}`" width="50" height="50" class="rounded">
          <p class="product-name">{{ item.name }}</p>
          <p class="product-price">{{ item.price }}원</p>
          <v-spacer></v-spacer>
          <p>온라인숍 문의</p>
          <p>02.2077.2946</p>
          <p>02.2077.2943</p>
          <v-spacer></v-spacer>
          <p>상담시간</p>
          <p>10시~16시</p>
        </li>
      </ul>
    </div> -->
    
      <v-container>
      <v-row>
        <v-col cols="12" sm="3" class="category-container">
          <h2 class="title">카테고리</h2>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item v-for="(category, i) in categories" :key="i" @click="selectedCategory = category">
                <v-list-item-content>
                  <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12" sm="6">
              <h2 class="title">상품 목록</h2>
            </v-col>
            <v-col cols="12" sm="6" class="text-sm-right filter-container">
              <v-select
               v-model="sortBy"
               :items="['이름순', '낮은 가격순', '높은 가격순', '최신순']"
               label="정렬"
               outlined
               dense
               style="max-width: 150px;"
               class="filter-item"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
  <v-col v-for="(item, i) in paginatedProducts" :key="i" cols="12" sm="4" md="3" class="product-col">
    <v-card class="elevation-6 product-card">
      <v-img :src="item.img" :alt="`상품 이미지 ${i + 1}`" aspect-ratio="1" class="rounded"></v-img>
      <v-card-text class="text-center">
       <p class="product-name">{{ item.name }}</p>
       <p class="product-price">{{ item.price }}원</p>
       <p class="product-date">{{ item.date }}</p>
       <p class="product-seller">판매자: {{ item.seller }}</p>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" text @click="addToCart(item)">장바구니에 담기</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
          <v-pagination v-model="currentPage" :length="totalPages" class="my-5"></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductListForm",
  data() {
    return {
      sortBy: "",
      selectedCategory: "전체",
      categories: ["전체", "카테고리1", "카테고리2", "카테고리3"],
      recentItems: [
        { img: "https://via.placeholder.com/200x200", name: "상품 1", price: "10,000" }, //스티키바
      ],
      products: [
        { img: "https://via.placeholder.com/200x200", name: "상품 1", price: "10,000", category: "카테고리1", date: "2022-03-29", seller: "A"}, 
        { img: "https://via.placeholder.com/200x200", name: "상품 2", price: "20,000", category: "카테고리2", date: "2023-03-29", seller: "B"},
        { img: "https://via.placeholder.com/200x200", name: "상품 3", price: "30,000", category: "카테고리3" },
        { img: "https://via.placeholder.com/200x200", name: "상품 4", price: "40,000", category: "카테고리1" },
        { img: "https://via.placeholder.com/200x200", name: "상품 5", price: "50,000", category: "카테고리2" },
        { img: "https://via.placeholder.com/200x200", name: "상품 1.3", price: "18,000", category: "카테고리1" },
        { img: "https://via.placeholder.com/200x200", name: "상품 2.7", price: "25,000", category: "카테고리2" },
        { img: "https://via.placeholder.com/200x200", name: "상품 4.6", price: "42,000", category: "카테고리3" },
        { img: "https://via.placeholder.com/200x200", name: "상품 5.2", price: "62,000", category: "카테고리3" },
        { img: "https://via.placeholder.com/200x200", name: "상품 6", price: "23,000", category: "카테고리2" },
        { img: "https://via.placeholder.com/200x200", name: "상품 7", price: "72,000", category: "카테고리1" },
        { img: "https://via.placeholder.com/200x200", name: "상품 8", price: "43,000", category: "카테고리1" },
        { img: "https://via.placeholder.com/200x200", name: "넘어가라", price: "38,000", category: "카테고리2" },
      ],
      currentPage: 1,
      itemsPerPage: 12,
    };
  },
  computed: {
    sortedProducts() {
      let sorted = this.products.slice();
      if (this.sortBy === "이름순") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "낮은 가격순") {
        sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else if (this.sortBy === "높은 가격순") {
        sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      } else if (this.sortBy === "최신순") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      if (this.selectedCategory !== "전체") {
        sorted = sorted.filter((product) => product.category === this.selectedCategory);
      }

      return sorted;
    },
  paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
    },
    sortedProducts() {
      let sorted = this.products.slice();
      if (this.sortBy === "이름순") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "낮은 가격순") {
        sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else if (this.sortBy === "높은 가격순") {
        sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      } else if (this.sortBy === "최신순") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      if (this.selectedCategory !== "전체") {
        sorted = sorted.filter((product) => product.category === this.selectedCategory);
      }

      return sorted;
    },
  paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
    },
  },
  
  methods: {
    addToCart(product) {
      // 여기에 장바구니 추가 기능을 구현하세요.
      console.log("장바구니에 추가:", product);
    },
  },
};
</script>

<style scoped>
.sticky-bar {
  position: fixed;
  bottom: 190px;
  right: 0;
  width: 500px;
  height: 150px;
  background-color: #f7f7f7;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 999;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.sticky-bar-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.sticky-bar p {
  font-size: 14px;
  margin: 5px;
  line-height: 1.5;
  text-align: center;
}

.large-screen-only {
  display: none;
}

@media (min-width: 768px) {
  .sticky-bar {
    width: 130px;
    height: 400px;
    justify-content: space-between;
    padding: 20px 40px;
  }

  .large-screen-only {
    display: block;
  }
}
  .sticky-bar ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .sticky-bar li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  }
  .sticky-bar img {
    margin-bottom: 5px;
  }
  .product-list-form {
  margin: 0 auto;
  margin-bottom: 100px;
}
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .product-name {
    font-size: 1.2rem;
    margin: 0;
  }
  .product-price {
    font-size: 1rem;
    color: #f44336;
    margin: 0;
  }
  .rounded {
    border-radius: 6px;
  }
  .elevation-6 {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  .product-col {
    margin-bottom: 20px;
  }
  .product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .filter-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .filter-item {
    margin-left: 10px;
  }
  .filter-item .v-input__control {
    min-width: 80px;
  }
</style>