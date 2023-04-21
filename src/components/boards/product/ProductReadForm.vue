<template>
  <v-container>
    <div align="center">
      <v-card v-if="product" max-width="1100" class="product-card">
        <v-row>
          <v-col cols="6">
            <v-card v-for="(imagePath, idx) in product.imageResourcePaths" :key="idx" cover>
              <v-img :src="require(`@/assets/productImgs/${imagePath}`)"
                style="object-fit: contain; width: 350px; height: 500px;">
              </v-img>

            </v-card>
          </v-col>
          <v-col cols="6" class="left-aligned">
            <v-card-title class="headline">{{ product.productName }}</v-card-title>
            <p class="price">가격: {{ product.price }} (원)</p>
            <p class="free-shipping">무료배송 (30,000원 이상 구매 시)</p>
            <div class="rewards-box">
              <p>30,000원 이상 결제 시 1% 적립</p>
              <p>카카오페이 결제 시 2% 적립</p>
              <p>[카카오페이 + 북유럽 머니] 결제 시 4% 추가적립</p>
            </div>
            <div class="rewards-box">
              <v-select label="수량" :items="['1', '2', '3']"></v-select>
            </div>
            <div class="rewards-box">
              <v-select label="옵션" :items="['옵션1', '옵션2', '옵션3']"></v-select>
            </div>
            <div class="btn-2" style="text-align: right;">
              <v-btn class="modify-btn" rounded
                :to="{ name: 'ProductOrderView', params: { productId: product.productId } }"
                v-if="isAuthenticated && !isCurrentUserAuthor">
                장바구니 담기
              </v-btn>
              <v-btn class="buy-btn" rounded :to="{ name: 'ProductOrderView', params: { productId: product.productId } }"
                v-if="isAuthenticated && !isCurrentUserAuthor">
                바로구매
              </v-btn>
            </div>

          </v-col>
        </v-row>
        <v-divider class="divider"></v-divider>
        <v-card-text class="content-area">
          <div class="product-description-view" v-html="product.content"></div>
        </v-card-text>
      </v-card>
      <p v-else>Loading .......... </p>
    </div>
  </v-container>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { mapState } from 'vuex'

export default {
  name: "ProductReadForm",
  props: {
    product: {
      type: Object,
      required: true,
    },
    productImages: {
      type: Array,
    }
  },

  computed: {
    ...mapState("account", ["isAuthenticated"]),
    isCurrentUserAuthor() {
      if (!this.isAuthenticated) {
        return false;
      }
      const currentUser = JSON.parse(localStorage.getItem('userInfo')).nickName;
      return this.product.writer === currentUser;
    },

  },
  created() {
    console.log('productImages: ' + this.productImages);
  },
  components: {
    'quill-editor': quillEditor,
  },
};
</script>

<style scoped>
.product-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.headline {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-right: 5px;
}

.content-area {
  min-height: 300px;
}

.divider {
  margin-top: -5px;
}

.free-shipping {
  font-size: 1rem;
  color: #4caf50;
}

.product-description-view {
  width: 100%;
  min-height: 200px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
}

.product-description-view img {
  max-width: 100%;
  height: auto;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #f44336;
}

.mb-3 {
  margin-bottom: 1rem;
}

.modify-btn,
.buy-btn {
  background-color: #fee789;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.modify-btn:hover,
.buy-btn:hover {
  background-color: #ffd65c;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modify-btn:active,
.buy-btn:active {
  background-color: #e6ac00;
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.modify-btn {
  margin-right: 5px;
}

.left-aligned {
  text-align: left;
}

.rewards-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  margin-right: 5px;
}

.rewards-box p {
  margin: 5px 0;
}

.btn-2 {
  margin-top: 20px;
}</style>
