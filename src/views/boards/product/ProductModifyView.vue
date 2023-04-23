<template>
    <v-container>
      <div align="center">
        <h2>내 게시글 수정하기</h2><br>
        <product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중 ........</p>
      </div>
    </v-container>
  </template>
  
  <script>
  
  import ProductModifyForm from '@/components/boards/product/ProductModifyForm.vue'
  import { mapActions, mapState } from 'vuex'


  const productModule = 'productModule'

  
  export default {
      components: { ProductModifyForm },
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