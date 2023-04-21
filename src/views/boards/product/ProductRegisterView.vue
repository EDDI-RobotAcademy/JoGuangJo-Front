<template>
    <v-container>
      <h2 class="h2">나의 상품 등록하기</h2>
      <product-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import ProductRegisterForm from '@/components/boards/product/ProductRegisterForm.vue'
  import { mapActions } from 'vuex'
  const productModule = 'productModule'


  export default {
      components: { ProductRegisterForm  },
      name: "ProductRegisterView",
      methods: {
          ...mapActions (productModule, [
              'requestCreateProductToSpring'
          ]),
          async onSubmit (payload) {
              await this.requestCreateProductToSpring(payload)
              await this.$router.push({
                  name: 'ProductListView'
              })
          }
      }
  }
  
  </script>
  
  <style scoped>
    .h2 {
      margin-left : 600px;
    }

  </style>