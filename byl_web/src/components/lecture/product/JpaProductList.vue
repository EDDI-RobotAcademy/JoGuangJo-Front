<template>
  <div>
    <h3>상품 목록</h3>
    <table>
      <tr>
        <th align="center" width="100">상품</th>
        <th align="center" width="640">상품명</th>
        <th align="center" width="150">판매자</th>
        <th align="center" width="300">등록일자</th>
      </tr>
      <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
        <td colspan="4">
        </td>
      </tr>
      <tr v-else v-for="(product, index) in paginatedProducts" :key="product.productId">
        <td align="center">
          {{ index + (currentPage - 1) * pageSize + 1 }}
        </td>
        <td align="left">
          <router-link :to="{ name: 'JpaProductReadPage',
                            params: { productId: product.productId.toString() }}">
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
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="currentPage -= 1">이전</button>
      <span>{{ currentPage }} / {{ pageCount }}</span>
      <button :disabled="currentPage === pageCount" @click="currentPage += 1">다음</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "JpaProductList",
  props: {
    products: {
      type: Array
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 2 // 수정 가능
    };
  },
  computed: {
    pageCount() {
      if (this.products) {
        return Math.ceil(this.products.length / this.pageSize);
      }
      return 0;
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.products ? this.products.slice(startIndex, endIndex) : [];
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
  
  th, td {
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
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .pagination button {
    background-color: #f2f2f2;
    color: #333;
    border: none;
    padding: 8px 16px;
    margin: 0 4px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
  .pagination button:hover {
    background-color: #333;
    color: #f2f2f2;
  }
  .pagination button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  </style>