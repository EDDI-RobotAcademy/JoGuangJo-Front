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
        <tr v-else v-for="product in products" :key="product.productId">
          <td align="center">
            {{ product.productId }}
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
    </div>
  </template>
  
  <script>
  
  export default {
      name: "JpaProductList",
      props: {
          products: {
              type: Array
          }
      }
  }
  
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
  
  </style>