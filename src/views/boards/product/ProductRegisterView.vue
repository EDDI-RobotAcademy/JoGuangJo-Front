<template>
    <v-container>
        <div class="header-form">
        <!-- 헤더 로고,메뉴-->
         <header-form/>
        </div><br><br>
      <h2 class="h2">상품 등록</h2>
      <product-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import ProductRegisterForm from '@/components/boards/product/ProductRegisterForm.vue'
  import { mapActions } from 'vuex'
  import HeaderForm from "@/components/layout/HeaderForm.vue";
  const productModule = 'productModule'


  export default {
      components: { ProductRegisterForm,HeaderForm  },
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