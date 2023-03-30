<template>
  <v-container>
    <div align="center">
      <h2>게시물 보기</h2>
      <jpa-product-read v-if="product" :product="product" :productImages="productImages"/>
      <p v-else>로딩중 .......... </p>
      <v-btn color="primary" :to="{ name: 'JpaProductModifyPage', params: { productId } }">
        수정
      </v-btn>
      <v-btn color="error" dark @click="onDelete">삭제</v-btn>
      <v-btn :to="{ name: 'JpaProductListPage' }">
        돌아가기
      </v-btn>
    </div>
  </v-container>
</template>

  
  <script>
  
  import JpaProductRead from '@/components/boards/product/ProductReadForm.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
    components: { JpaProductRead },
      name: "JpaProductReadPage",
      props: {
          productId: {
              type: String,
              required: true,
          }
      },
      computed: {
          ...mapState(['product', 'productImages'])
      },
      methods: {
          ...mapActions([
              'requestProductToSpring',
              'requestDeleteProductToSpring',
              'requestProductImageToSpring',
          ]),
          async onDelete () {
              await this.requestDeleteProductToSpring(this.productId)
              await this.$router.push({ name: 'JpaProductListPage' })
          }
      },
      async created () {
          console.log('productId: ' + this.productId)
          await this.requestProductToSpring(this.productId)
          await this.requestProductImageToSpring(this.productId)
      }
  }
  
  </script>
  
  <style>
  
  </style>