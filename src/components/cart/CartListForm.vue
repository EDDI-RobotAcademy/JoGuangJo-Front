<template>
  <v-container class="for-cart-form">
    <v-card>
      <v-card-title class="headline">장바구니</v-card-title>
      <v-card-text>
        <v-row class="subtitle-1 font-weight-bold">
          <v-col cols="2">
            <v-checkbox v-model="allSelected" class="checkbox"></v-checkbox>
          </v-col>
          <v-col cols="5">상품명</v-col>
          <v-col cols="3">수량</v-col>
          <v-col cols="2">금액</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row
          v-for="(item, index) in cartItems"
          :key="index"
          class="cart-item"
        >
          <v-col cols="2">
            <v-checkbox v-model="item.isSelected" class="checkbox"></v-checkbox>
          </v-col>
          <v-col cols="5">{{ item.product.productName }}</v-col>
          <v-col cols="3">
            <v-select
              class="for-select-quantity"
              label="수량"
              :items="[1, 2, 3]"
              v-model="item.quantity"
            ></v-select>
          </v-col>
          <v-col cols="2">{{ item.product.price }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-divider class="my-3"></v-divider>
    <v-card>
      <v-card-title class="headline">결제정보</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <div class="order-box">
              <p>30,000원 이상 결제 시 1% 적립 및 배송비 무료</p>
              <p>카카오페이 결제 시 2% 적립</p>
              <p>[카카오페이 + 북유럽 머니] 결제 시 4% 추가적립</p>
            </div>
          </v-col>
          <v-col class="order-cols1" cols="2">
            <p>총 결제 금액</p>
          </v-col>
          <v-col class="order-cols2" cols="4">
            {{ totalPrice }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import cartStates from "@/store/cart/cartStates";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      cartItems: () => cartStates.cartItems,
    }),
    allSelected: {
      get() {
        // 모든 항목이 체크 되면 전체 체크 박스도 체크 되어지게 한다.
        return this.cartItems.every((item) => item.isSelected);
      },
      set(value) {
        this.cartItems.forEach((item) => (item.isSelected = value));
        // 개별 항목의 isSelected 속성을 변경한 후, UI를 업데이트합니다.
        this.$nextTick(() => this.$forceUpdate());
      },
    },
    totalPrice() {
      let total = 0;
      const selectedItems = this.cartItems.filter((item) => item.isSelected);
      for (let item of selectedItems) {
        total += item.product.price * item.quantity;
      }
      if (isNaN(total) || total === 0) {
        return "상품과 수량을 정확히 선택해주세요.";
      } else if (total < 30000) {
        return total + 3000 + "원 (배송비 3천원 포함)";
      } else {
        return total + "원 (배송비 무료)";
      }
    },
  },
  methods: {},
};
</script>

<style scoped>
.cart-item:hover {
  background-color: #f5f5f5;
}

.checkbox {
  padding: 0 !important;
  margin: 0 !important;
}

.headline {
  background-color: #fee789 !important;
}

.for-cart-form {
  width: 800px;
}

.for-select-quantity {
  margin-top: -10px;
}

.subtitle-1 {
  margin-top: 10px;
  margin-bottom: -30px;
}

.cart-item {
  margin-bottom: -12px;
}

.order-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
}

.order-cols1 {
  margin-top: 60px;
}
.order-cols2 {
  margin-top: 60px;
}
</style>