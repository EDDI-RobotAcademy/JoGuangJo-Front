<template>
  <div class="purchase-complete-container">
    <div class="purchase-complete-card">
      <h1>구매 완료</h1>
      <p>감사합니다! 구매가 완료되었습니다.</p>
      <router-link to="/" class="home-link btn">홈으로 돌아가기</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PurchaseCompleteView",
  data() {
    return {
      pgToken: null,
    };
  },
  async created() {
    this.pgToken = this.$route.query.pg_token;

    if (this.pgToken) {
      try {
        const response = await axios.post(
          "http://localhost:7777/order/kakaoPaySuccess",
          {
            pgToken: this.pgToken,
          }
        );
        console.log("Purchase completed:", response.data);
      } catch (error) {
        console.error("Error completing purchase:", error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.purchase-complete-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.purchase-complete-card {
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.home-link {
  background-color: #ffc107;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #e0a800;
    text-decoration: none;
  }
}
</style>
