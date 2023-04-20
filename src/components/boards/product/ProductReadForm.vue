<template>
  <v-container>
    <div align="center">
      <v-card v-if="product" max-width="1100" class="product-card">
        <v-row>
          <v-col cols="6">
            <v-card v-for="(imagePath, idx) in product.imageResourcePaths" :key="idx" cover>
              <v-img :src="require(`@/assets/productImgs/${imagePath}`)" style="object-fit: contain; width: 100%; height: 100%;">
              </v-img>
            </v-card>            
          </v-col>
          <v-col cols="6">
            <v-card-title class="headline">{{ product.productName }}</v-card-title>
            <p class="price">가격: {{ product.price }}</p>
            <p class="free-shipping">무료배송 (30,000원 이상 구매 시)</p>
            <div class="action-container">
              <div class="quantity-selection">
                <input type="number" id="quantity" name="quantity" min="1" max="99" value="1">
              </div>
              <div>
                <v-btn class="modify-btn" rounded
                  :to="{ name: 'ProductOrderView', params: { productId: product.productId } }"
                  v-if="isAuthenticated && !isCurrentUserAuthor">
                  장바구니 담기
                </v-btn>
                <v-btn class="buy-btn" rounded
                  :to="{ name: 'ProductOrderView', params: { productId: product.productId } }"
                  v-if="isAuthenticated && !isCurrentUserAuthor">
                  바로구매
                </v-btn>

              </div>
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

.quantity-selection {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.quantity-selection input {
  margin-left: 0.5rem;
  width: 60px;
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

.quantity-selection {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
}

.quantity-selection input {
  margin-left: 0.5rem;
  width: 60px;
  border: none;
  text-align: center;
  background-color: #f8f8f8;
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

.action-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
