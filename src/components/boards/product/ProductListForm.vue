<template>
  <div class="full-container">
  <div class="full-left1">
    <router-link to="/">
    <img src='@/assets/logo/logo.gif' alt="logo" width="250" height="100%" class="logo-img1">
    </router-link>
    <product-category-form/>
  </div>
  <div class="full-right1">
  <div class="product-list-form1">
    <v-container>
      <v-row>
   <!-- <v-col cols="12" sm="3" class="category-container">
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
        </v-col> -->
        <v-col>
          <v-row style="width:100%">
            <v-col class="product-list1">
              <h2 class="title1">상품 목록</h2>
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
               color="#fee789"
               rounded
               ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(item, i) in paginatedProducts" :key="i" cols="12" sm="4" md="3" class="product-col">
              <v-card class="elevation-6 product-card">
                <v-img :src="item.img" :alt="`상품 이미지 ${i + 1}`" aspect-ratio="1" class="rounded"></v-img>
                <v-card-text class="text-center">
                  <p class="product-name">
                  <router-link :to="{ name: 'ProductReadView', params: { productId: item.productId.toString() }}">
                   {{ item.productName }}
                  </router-link>
                  </p>
                  <p class="product-price">{{ item.price }}원</p>
                  <p class="product-date">{{ item.regDate }}</p>
                  <p class="product-seller">판매자: {{ item.writer }}</p>
                  <div class="button-container">
                  <v-btn @click="onCartClick(item)" class="btn1">장바구니</v-btn>
                  <v-btn @click="onBuyClick(item)" class="btn1">바로구매</v-btn>
                  <v-btn @click="onLikeClick(item)" class="btn1">♥</v-btn>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn color="primary" text @click="addToCart(item.productId)">장바구니에 담기</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-pagination v-model="currentPage" :length="pageCount" class="my-5"></v-pagination>
        </v-col>
      </v-row>
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
   // selectedCategory: "전체",
   // categories: ["전체", "카테고리1", "카테고리2", "카테고리3"], //내꺼
    currentPage: 1,
    pageSize: 12, // 수정 가능
    searchQuery: '',
    displayedProducts: [],
    noticeItems: [],
    searchBy: 'productName',
    currentPage: 1,
    itemsPerPage: 12,
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
    
    addToCart(productId) {
      this.$emit('addToCart', { productId })
    },
}
};
</script>

<style scoped>
.logo-img1 {
  margin-top: -90px;
  margin-left: 55px;
}
.full-container {
  display: flex;
  margin-right: 90px;
}
.full-left1 {
  width: 20%;
  height: 100%;
  margin-top: 100px;
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
  margin-left: 80px; /* 수정 */
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
  
  .btn1 {
    background-color: #fee789 !important;
    color: black;
    margin-left: -19px;
  }

  .btn:hover1 {
    background-color: #FFC107 !important;
    color: white;
  }

  .button-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 추가 */
  margin-right: -20px;
  margin-top: auto; /* 추가 */
  margin-bottom: auto; /* 추가 */
}



/*table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  color: #333;
}

td {
  vertical-align: middle;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.router-link-active {
  font-weight: bold;
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
  background-color: #4CAF50;
  border: none;
  color: white;
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
}*/
</style>
