<template>
  <div class="payment-container">
    <h1>구매하기</h1>
    <form @submit.prevent="KakaoPay">
      <div class="form-group">
        <label for="name">이름:</label>
        <input type="text" id="name" v-model="name" class="input-field" />
      </div>
      <div class="form-group">
        <label for="address">주소:</label>
        <input type="text" id="address" v-model="address" readonly @click="openDaumPostcode"
          class="input-field" />
      </div>
      <div class="form-group">
        <label for="address-detail">상세 주소 및 기타 메모사항(공동현관 비밀번호 등):</label>
        <input type="text" id="address-detail" v-model="addressDetail" class="input-field" />
      </div>
      <div class="form-group">
        <label for="phone">핸드폰번호:</label>
        <input type="tel" id="phone" v-model="phone" class="input-field" />
      </div>
      <div v-for="(p, index) in product" :key="index">
      <div class="form-group">
        <label for="product-title">상품명:</label>
        <input type="text" id="product-title" :value="p.productName" readonly class="input-field" />
      </div>
      <div class="form-group">
        <label for="product-price">가격:</label>
        <input type="number" id="product-price" :value="p.price" readonly class="input-field" />
      </div>
      </div>
      <v-btn icon type="submit">
        <v-img :src="require('/public/kakaopay/payment_icon_yellow_small.png')" />
      </v-btn>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductOrderView',

  data() {
    return {
      name: '',
      address: '',
      addressDetail: '',
      phone: '',
      product: [],
      cartItemId: '',
    };
  },

async mounted() {
  const productId = this.$route.params.id;
  const productIds = this.$route.params.productIds;
  console.log('productId:', productId);
  console.log('productIds:', productIds);
  
  let selectedProductIds = [];
  if (Array.isArray(productIds)) {
    // productIds로 값이 들어오는 경우(배열), 선택된 상품들의 id를 가져옵니다.
    selectedProductIds = productIds;
  } else {
    // productIds가 없는 경우, 단일 상품을 구매하는 것이므로 productId를 사용합니다.
    selectedProductIds.push(productId);
  }

  try {
    // 선택된 모든 상품 정보를 가져오기 위해 반복문을 사용합니다. productController의 read 메소드와 통신합니다.
    for (let i = 0; i < selectedProductIds.length; i++) {
      const response = await axios.get(`http://localhost:7777/product/${selectedProductIds[i]}`);
      this.product.push(response.data);
    }
  } catch (error) {
    console.error('에러 발생');
  }
},

  methods: {
    async KakaoPay() {
      try {
        const response = await axios.post("http://localhost:7777/order/kakaoPay");
        console.log(response.data);
        const box = response.data.next_redirect_pc_url;
        const paymentWindow = window.open(box);

        window.addEventListener('message', async (event) => {
          if (event.data === 'payment_success') {
            paymentWindow.close();
            await axios.post("http://localhost:7777/order/kakaoPaySuccess", {
              productId: this.product.id,
            });
            this.$router.push({ name: 'PurchaseComplete' });
          }
        });
      } catch (error) {
        console.error("Error initiating Kakao Pay payment:", error);
      }
    },



    openDaumPostcode() {
      const { daum } = window;
      new daum.Postcode({
        oncomplete: data => {
          let fullAddr = data.address;
          if (data.addressType === 'R') {
            fullAddr = data.roadAddress;
          }
          this.address = fullAddr;
        }
      }).open();
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input-field {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
}

v-btn {
  margin-top: 1rem;
  background-color: #F7E600;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #F7E314;
  }
}
</style>
