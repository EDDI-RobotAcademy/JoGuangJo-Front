<template>
  <v-container>
    <div align="center">
      <h2>게시물 보기</h2>
      <product-read-form v-if="product" :product="product" :productImages="productImages" />
      <p v-else>로딩중 .......... </p>
      <v-btn color="primary" :to="{ name: 'ProductModifyView', params: { productId } }" v-if="isCurrentUserAuthor">
        수정
      </v-btn>
      <v-btn color="error" dark @click="onDelete" v-if="isCurrentUserAuthor">
        삭제
      </v-btn>

      <v-btn :to="{ name: 'ProductListView' }">
        돌아가기
      </v-btn>
    </div>
  </v-container>
</template>

  
<script>

import ProductReadForm from '@/components/boards/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { ProductReadForm },
  name: "ProductReadView",
  props: {
    productId: {
      type: String,
      required: true,
    }
  },
  computed: {
  ...mapState(['product', 'productImages']),
  isLoggedIn() {
    return !!localStorage.getItem('userInfo');
  },
  isCurrentUserAuthor() {
    if (!this.isLoggedIn) {
      return false;
    }
    const currentUser = JSON.parse(localStorage.getItem('userInfo')).nickName;
    return this.product.writer === currentUser;
  },
},
  methods: {
    ...mapActions([
      'requestProductToSpring',
      'requestDeleteProductToSpring',
      'requestProductImageToSpring',
    ]),
    async onDelete() {
      await this.requestDeleteProductToSpring(this.productId)
      await this.$router.push({ name: 'ProductListView' })
    }
  },
  async created() {
    console.log('productId: ' + this.productId)
    await this.requestProductToSpring(this.productId)
    await this.requestProductImageToSpring(this.productId)
  }
}

</script>
  
<style></style>