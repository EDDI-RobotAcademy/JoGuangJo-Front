<template>
  <v-container>
    <div align="center">
      <product-read-form v-if="product" :product="product" :productImages="productImages" />
      <p v-else>로딩중 .......... </p>
      <div class="btn-container">
        <v-btn class="back-btn" color="#fee789" rounded :to="{ name: 'ProductListView' }">
          돌아가기
        </v-btn>
        <div>
          <v-btn class="modify-btn" color="#fee789" rounded :to="{ name: 'ProductModifyView', params: { productId } }"
            v-if="isCurrentUserAuthor">
            수정
          </v-btn>
          <v-btn class="delete-btn" rounded @click="onDelete" v-if="isCurrentUserAuthor">
            삭제
          </v-btn>
        </div>
      </div>
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
    ]),
    async onDelete() {
      await this.requestDeleteProductToSpring(this.productId)
      await this.$router.push({ name: 'ProductListView' })
    }
  },
  async created() {
    console.log('productId: ' + this.productId)
    await this.requestProductToSpring(this.productId)
  }
}

</script>

<style scoped>
  .h2 {
    margin-bottom: 20px;
    background-color: #fee789;
  }

  .btn-container {
    display: flex;
    justify-content: center; /* Updated to center the buttons */
    margin-top: 20px;
  }

  .back-btn {
    margin-right: 10px; /* Updated margin-right */
  }

  .modify-btn {
    margin-right: 5px;
  }

  .delete-btn {
    margin-left: 5px;
    background-color: rgb(208, 197, 197)
  }
</style>

