<template>
  <div class="payment-container">
    <h1>구매하기</h1>
    <form @submit.prevent="KakaoPay">
      <div class="form-group">
        <label for="name">이름:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="address">주소:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div class="form-group">
        <label for="phone">핸드폰번호:</label>
        <input type="tel" id="phone" v-model="phone" required />
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
      phone: '',
    };
  },

  mounted() {
    
  },

  methods: {
    async KakaoPay() {
      try {
        // Handle form data before sending it to the server
        const response = await axios.post("http://localhost:7777/order/kakaoPay");
        console.log(response.data);
        const box = response.data.next_redirect_pc_url;
        window.open(box);
      } catch (error) {
        console.error("Error initiating Kakao Pay payment:", error);
      }
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
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

v-btn {
  margin-top: 1rem;
}
</style>
