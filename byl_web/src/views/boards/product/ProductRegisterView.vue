<template>
    <v-container>
      <h2>상품 등록</h2>
      <product-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import ProductRegisterForm from '@/components/boards/product/ProductRegisterForm.vue'
  import { mapActions } from 'vuex'
  
  export default {
      components: { ProductRegisterForm },
      name: "ProductRegisterView",
      methods: {
          ...mapActions ([
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
  
  <style>
  
  </style>