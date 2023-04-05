<template>
  <div>
    <h3>상품 목록</h3>
    <div class="search">
      <select v-model="searchBy">
        <option value="productName">상품명</option>
        <option value="seller">판매자</option>
      </select>
      <input type="text" v-model="searchQuery" placeholder="상품 검색" @keyup.enter="searchProducts">
      <button @click="searchProducts">검색</button>
    </div>
    <table>
      <tr>
        <th align="center" width="100">상품</th>
        <th align="center" width="640">상품명</th>
        <th align="center" width="150">판매자</th>
        <th align="center" width="300">등록일자</th>
      </tr>
      <tr v-if="!displayedProducts || (Array.isArray(displayedProducts) && displayedProducts.length === 0)">
        <td colspan="4">
        </td>
      </tr>
      <tr v-else v-for="(product, index) in paginatedProducts" :key="product.productId">
        <td align="center">
          {{ index + (currentPage - 1) * pageSize + 1 }}
        </td>
        <td align="left">
          <router-link :to="{
            name: 'ProductReadView',
            params: { productId: product.productId.toString() }
          }">
            {{ product.productName }}
          </router-link>
        </td>
        <td align="right">
          {{ product.writer }}
        </td>
        <td align="center">
          {{ product.regDate }}
        </td>
      </tr>
    </table>
    <Pagination-form :current-page="currentPage" :page-count="pageCount" @update:current-page="currentPage = $event" />
  </div>
</template>

<script>
import PaginationForm from "@/components/layout/PaginationForm.vue";

export default {
  name: "ProductListForm",
  components: {
    PaginationForm
  },
  props: {
    products: {
      type: Array
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5, // 수정 가능
      searchQuery: '',
      displayedProducts: [],
      noticeItems: [],
      searchBy: 'productName'
    };
  },
  computed: {
    pageCount() {
      if (this.displayedProducts) {
        return Math.ceil(this.displayedProducts.length / this.pageSize);
      }
      return 0;
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.displayedProducts ? this.displayedProducts.slice(startIndex, endIndex) : [];
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
    }
  }
};
</script>
<style>
table {
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
}
</style>