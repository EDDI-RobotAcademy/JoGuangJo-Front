<template>
  <div class="payment-container">
    <h1 class="header">주문 / 결제</h1>
    <form @submit.prevent="KakaoPay">
      <!-- 구매자 정보 -->
      <div class="form-group buyer-info">
        <h2>구매자 정보</h2>
        <hr>
        <label for="buyer-name">이름:</label>
        <input type="text" id="buyer-name" v-model="name" class="input-field" required />

        <label for="buyer-email">이메일:</label>
        <input type="email" id="buyer-email" v-model="email" class="input-field" required />

        <label for="buyer-phone">핸드폰번호:</label>
        <input type="tel" id="buyer-phone" v-model="phone" class="input-field" required />
      </div>

      <!-- 받는 사람 정보 -->
      <div class="form-group recipient-info">
        <h2>받는 사람 정보</h2>
        <hr>
        <label for="recipient-name">이름:</label>
        <input type="text" id="recipient-name" v-model="recipientName" class="input-field" required />

        <label for="recipient-address">주소:</label>
        <input type="text" id="recipient-address" v-model="address" readonly @click="openDaumPostcode" class="input-field"
          required />

        <label for="recipient-phone">핸드폰번호:</label>
        <input type="tel" id="recipient-phone" v-model="recipientPhone" class="input-field" required />

        <label for="address-detail">배송 요청사항 (예: 공동현관 비밀번호, 경비실에 맡겨주세요 등):</label>
        <input type="text" id="address-detail" v-model="addressDetail" class="input-field" />
      </div>

      <!-- 배송 정보 -->
      <div class="form-group shipping-info">
        <h2>배송 정보</h2>
        <hr>
        <div v-for="(product, index) in product" :key="index">
          <label for="product-title">상품명:</label>
          <input type="text" id="product-title" :value="product.productName" readonly class="input-field" />

          <label for="product-price">가격(원):</label>
          <input type="number" id="product-price" :value="product.price" readonly class="input-field" />
        </div>
      </div>

      <!-- 결제 정보 -->
      <div class="form-group payment-info">
        <h2>결제 정보</h2>
        <hr>
        <label for="payment-method">결제 방법:</label>
        <select id="payment-method" class="input-field">
          <option value="credit-card">카카오페이</option>
          <option value="mobile-payment">휴대폰 소액결제</option>
          <option value="bank-transfer">실시간 계좌이체</option>
        </select>
      </div>
      <div class="payment-btn-container">
        <button type="submit" class="button pay-btn">결제하기</button>
        <button type="button" class="button cancel-btn" @click="cancelOrder">취소</button>
      </div>
    </form>
  </div>
</template>

<script>
import axiosInst from '@/utility/axiosObject';

export default {
  name: 'ProductOrderView',

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      recipientName: '',
      recipientPhone: '',
      address: '',
      addressDetail: '',
      product: [],
      cartItemId: '',
    };
  },

  async mounted() {
    const productId = this.$route.params.productId;
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
        const response = await axiosInst.get(`/product/${selectedProductIds[i]}`);
        this.product.push(response.data);
      }
    } catch (error) {
      console.error('에러 발생');
    }
  },


  methods: {
    cancelOrder() {
      this.$router.push({ name: 'ProductListView' }); // 라우터를 사용하여 홈 페이지로 돌아갑니다.
    },
    async KakaoPay() {
      try {
        const response = await axiosInst.post("/order/kakaoPay")
        console.log(response.data);
        const box = response.data.next_redirect_pc_url;
        const paymentWindow = window.open(box);

        window.addEventListener('message', async (event) => {
          if (event.data === 'payment_success') {
            paymentWindow.close();
            await axiosInst.post("/order/kakaoPaySuccess", {
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
.header {
  margin-left: 0em;
  background-color: #fee789;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 3em;
  width: 100%;
  box-sizing: border-box;
}

.payment-container {
  margin-left: 2em;
  width: 90%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-left: 1em;
  width: 90%;
}

.buyer-info,
.recipient-info,
.shipping-info,
.payment-info {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

hr {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
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
  width: 30%;

  &:focus {
    border-color: #007bff;
  }
}

.pay-btn {
  margin-top: 1rem;
  background-color: #fee789;
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

.cancel-btn {
  margin-top: 1rem;
  margin-left: 1rem;
  background-color: rgb(208, 197, 197);
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

.payment-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.shipping-info label+.input-field {
  margin-right: 1rem;
}
</style>
