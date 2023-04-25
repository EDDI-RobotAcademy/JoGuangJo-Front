<template>
  <div class="full-container">
    <div class="full-left1">
      <product-category-form />
    </div>
    <div class="full-right1">
      <div class="product-list-form1">
        <v-container>
          <div class="search-sortBy">
            <v-row>
              <v-col cols="12" sm="6">
                <div class="search">
                  <select v-model="searchBy">
                    <option value="productName">상품명</option>
                    <option value="seller">판매자</option>
                  </select>
                  <input type="text" v-model="searchQuery" placeholder="상품 검색" @keyup.enter="searchProducts">
                  <button @click="searchProducts">검색</button>
                </div>
              </v-col>
              <v-col cols="12" sm="6" class="register-sortby-col">
                <button @click="goToProductRegister" class="register-button">상품 등록</button>
                <div class="sortby">
                  <select v-model="sortBy" @change="sortProducts" class="custom-select">
                    <option value="">정렬하기</option>
                    <option value="이름순">이름순</option>
                    <option value="낮은 가격순">낮은 가격순</option>
                    <option value="높은 가격순">높은 가격순</option>
                    <option value="최신순">최신순</option>
                  </select>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row>
            <v-col v-for="(item, i) in paginatedProducts" :key="i" cols="12" sm="4" md="3" class="product-col">
              <v-card class="elevation-6-product-card">
                <img v-for="(imagePath, idx) in item.realThumbnail" :key="idx"
                  :src="require(`@/assets/productImgs/${imagePath}`)" :alt="`상품 이미지 ${i + 1}`"
                  class="rounded product-image">
                <v-card-text class="text-center">
                  <p class="product-name">
                    <router-link :to="{ name: 'ProductReadView', params: { productId: item.productId.toString() } }">
                      {{ item.productName }}
                    </router-link>
                  </p>
                  <p class="product-price">{{ item.price }}원</p>
                  <p class="product-seller">판매자: {{ item.writer }}</p>
                  <div class="button-container">
                    <v-btn @click="addToCart(item.productId)" class="btn1">장바구니</v-btn>
                    <v-btn @click="onBuyClick(item)" class="btn1">바로구매</v-btn>
                    <v-btn @click="onLikeClick(item)" class="btn1">♥</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-pagination v-model="currentPage" :length="pageCount" color="#fee789" class="my-5"></v-pagination>

        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationForm from "@/components/layout/PaginationForm.vue";
import ProductCategoryForm from "@/components/layout/ProductCategoryForm.vue";

export default {
  name: "ProductListForm",
  components: {
    PaginationForm,
    ProductCategoryForm
  },
  props: {
    products: {
      type: Array
    },
  },
  data() {
    return {
      sortBy: "",
      currentPage: 1,
      pageSize: 12, // 수정 가능
      searchQuery: '',
      displayedProducts: [],
      noticeItems: [],
      searchBy: 'productName',
    };
  },

  computed: {
    sortedProducts() {
      let sorted = this.displayedProducts.slice();
      if (this.sortBy === "이름순") {
        sorted.sort((a, b) => a.productName.localeCompare(b.productName));
      } else if (this.sortBy === "낮은 가격순") {
        sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else if (this.sortBy === "높은 가격순") {
        sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      } else if (this.sortBy === "최신순") {
        sorted.sort((a, b) => new Date(b.regDate) - new Date(a.regDate));
      }

      if (this.selectedCategory !== "전체") {
        sorted = sorted.filter((product) => product.category === this.selectedCategory);
      }

      return sorted;
    },
    pageCount() {
      if (this.sortedProducts) {
        return Math.ceil(this.sortedProducts.length / this.pageSize);
      }
      return 0;
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.sortedProducts ? this.sortedProducts.slice(startIndex, endIndex) : [];
    }
  },
  created() {
    //브라우저 새로고침 해도 상품 목록 계속 보이게 수정
    if (this.products && this.products.length > 0) {
      this.searchProducts();
    }
  },
  watch: {
    products() {
      //브라우저 새로고침 해도 상품 목록 계속 보이게 수정
      // 상품 목록이 변경될 때마다 searchProducts() 호출
      if (this.products && this.products.length > 0) {
        this.searchProducts();
      }
    }
  },
  methods: {
    sortProducts() {
      this.currentPage = 1;
    },
    goToProductRegister() {
      this.$router.push({ name: 'ProductRegisterView' });
    },
    searchProducts() {
      const query = this.searchQuery.toLowerCase();
      if (query === '') {
        this.displayedProducts = this.products;
      } else {
        if (this.searchBy === 'productName') {
          this.displayedProducts = this.products.filter(product => product.productName.toLowerCase().includes(query));
        } else if (this.searchBy === 'seller') {
          this.displayedProducts = this.products.filter(product => product.writer.toLowerCase().includes(query));
        }
      }
      this.currentPage = 1;
    },
    onBuyClick(product) {
      this.$router.push({ name: 'ProductOrderView', params: { productId: product.productId } });
    },

    addToCart(productId) {
      this.$emit('addToCart', { productId })
    },
  }
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 200px;
  /* 원하는 높이 설정 */
  object-fit: cover;
}

.search-sortBy {
  margin-top: -30px;
}

.search {
  margin-top: -9px;
  margin-left: 00px;
}

.full-container {
  display: flex;
  margin-right: 90px;
}

.full-left1 {
  width: 20%;
  height: 100%;
  margin-top: 15px;
  margin-left: -70px;
}

.full-right1 {
  width: 80%;
  height: 100%;
}

.product-list-form1 {
  margin: auto;
  margin-bottom: 100px;
  height: 100%;
  margin-left: 80px;
  /* 수정 */
  width: 1100px;
}

.title1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding-left: 20px;
}

.product-name {
  font-size: 1.2rem;
  margin: 0;
  text-decoration: none;
}

.product-price {
  font-size: 1rem;
  color: #f44336;
  margin: 0;
}

.rounded {
  border-radius: 6px;
}

.filter-item {
  margin-left: 360px;
  margin-top: -5px;
}

.filter-item .v-input__control {
  min-width: 80px;
}

.btn1 {
  background-color: #fee789 !important;
  color: black;
  margin: 0 6px;
  transition: background-color 0.3s;
  padding: 8px 12px;
  font-size: 14px;
  width: 70px;
  text-align: center;
}

.btn1:hover {
  background-color: #FFC107 !important;
  color: white;
}


.button-container {
  display: flex;
  justify-content: center; /* space-between을 space-around로 변경 */
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
}

.search input[type="text"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
  margin-right: 10px;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: 5px center;
  padding-left: 35px;
}

.search button {
  background-color: #FEE789;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.search select {
  appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
}

.search select:focus {
  outline: none;
  border-color: #4CAF50;
}

.filter-item {
  margin-right: -530px;
}

.register-col {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}

.sortby-col {
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
}

.register-button {
  margin-right: 10px;
}

.register-sortby-col {
  display: flex;
  justify-content: flex-end;
  align-items: center
}

.register-button {
  background-color: #FEE789;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #FFC107;
  color: white;
}

.sortby-col select {
  appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.sortby-col select:focus {
  outline: none;
  border-color: #4CAF50;
}

.sortby-col select::before {
  content: "정렬";
  color: #000;
  background-color: #fff;
  padding-right: 10px;
}
</style>

