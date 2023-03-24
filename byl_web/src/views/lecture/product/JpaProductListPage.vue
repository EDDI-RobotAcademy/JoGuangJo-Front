<template>
    <v-container>
      <h2>굿즈 상품 등록</h2>
      <router-link :to="{ name: 'JpaProductRegisterPage' }">
        <button style="background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px;">판매 등록</button>
      </router-link>
      <jpa-product-list :products="products"/>
    </v-container>
  </template>
  
  <script>
  
  import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
    components: { JpaProductList },
    name: "JpaProductListPage",
    computed: {
      ...mapState([
        'products'
      ]),
    },
    mounted () {
      this.requestProductListToSpring()
    },
    methods: {
      ...mapActions([
        'requestProductListToSpring'
      ])
    }
  }
  
  </script>
  
  <style>
  h2 {text-align: center;}
  </style>