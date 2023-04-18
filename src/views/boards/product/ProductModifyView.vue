<template>
    <v-container>
        <div class="header-form">
        <!-- 헤더 로고,메뉴-->
         <header-form/>
        </div><br>
      <div align="center">
        <h2>게시물 수정</h2><br>
        <product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중 ........</p>
      </div>
    </v-container>
  </template>
  
  <script>
  
  import ProductModifyForm from '@/components/boards/product/ProductModifyForm.vue'
  import { mapActions, mapState } from 'vuex'
  import HeaderForm from "@/components/layout/HeaderForm.vue";

  const productModule = 'productModule'

  
  export default {
      components: { ProductModifyForm, HeaderForm },
      name: "ProductModifyView",
      props: {
          productId: {
              type: String,
              required: true,
          }
      },
      computed: {
          ...mapState(productModule, ['product'])
      },
      methods: {
          ...mapActions(productModule, [
              'requestProductToSpring',
              'requestProductModifyToSpring',
          ]),
          async onSubmit (payload) {
              const { productName, content, writer, price } = payload
              const productId = this.productId
  
              await this.requestProductModifyToSpring(
                  { productId, productName, content, writer, price })
              await this.$router.push({
                  name: 'ProductReadView',
                  params: { productId: this.productId }
              })
          }
      },
      created () {
          this.requestProductToSpring(this.productId)
      }
  }
  
  </script>
  
  <style scoped>
  
  </style>