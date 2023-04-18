<template>
  <v-container>
    <div align="center">
      <h2 class="h2" style="margin-top:20px;">게시물 보기</h2>
      <product-read-form v-if="product" :product="product" :productImages="productImages" />
      <p v-else>로딩중 .......... </p>
      <v-btn class="btn" color="primary" :to="{ name: 'ProductModifyView', params: { productId } }" v-if="isCurrentUserAuthor">
        수정
      </v-btn>
      <v-btn class="btn" color="error" dark @click="onDelete" v-if="isCurrentUserAuthor">
        삭제
      </v-btn>
      <v-btn class="btn" color="success" :to="{ name: 'ProductOrderView', params: { productId } }" v-if="isAuthenticated && !isCurrentUserAuthor">
        구매하기
      </v-btn>
      <v-btn class="btn" :to="{ name: 'ProductListView' }">
        돌아가기
      </v-btn>
    </div>
  </v-container>
</template>

  
<script>

import ProductReadForm from '@/components/boards/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex'

const productModule = 'productModule'

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
  ...mapState(productModule, ['product', 'productImages']),
  ...mapState("account", ["isAuthenticated"]),
  isAuthenticated() {
    return !!localStorage.getItem('userInfo');
  },
  isCurrentUserAuthor() {
    if (!this.isAuthenticated) {
      return false;
    }
    const currentUser = JSON.parse(localStorage.getItem('userInfo')).nickName;
    return this.product.writer === currentUser;
  },
},
  methods: {
    ...mapActions(productModule, [
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
  
<style scoped>
.h2 {
  margin-bottom : -530px;
}

</style>