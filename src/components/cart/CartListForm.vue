<template>
  <v-card>
    <v-card-title class="headline">장바구니</v-card-title>
    <v-card-text>
      <v-row class="subtitle-1 font-weight-bold">
        <v-col cols="1">
          <v-checkbox v-model="allSelected" class="checkbox"></v-checkbox>
        </v-col>
        <v-col cols="2">NO</v-col>
        <v-col cols="5">상품명</v-col>
        <v-col cols="2">수량</v-col>
        <v-col cols="2">금액</v-col>
      </v-row>
      <v-divider class="my-3"></v-divider>
      <v-row v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <v-col cols="1">
          <v-checkbox v-model="item.isSelected" class="checkbox"></v-checkbox>
        </v-col>
        <v-col cols="2">{{ item.cartItemId }}</v-col>
        <v-col cols="5">{{ item.product.productName }}</v-col>
        <v-col cols="2">{{ item.product.quantity }}</v-col>
        <v-col cols="2">{{ item.product.price * item.product.quantity }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import cartStates from '@/store/cart/cartStates';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      cartItems: () => cartStates.cartItems
    }),
    allSelected: {
      get() {
        // 모든 항목이 체크 되면 전체 체크 박스도 체크 되어지게 한다.
        return this.cartItems.every(item => item.isSelected);
      },
      set(value) {
        this.cartItems.forEach(item => item.isSelected = value);
        // 개별 항목의 isSelected 속성을 변경한 후, UI를 업데이트합니다.
        this.$nextTick(() => this.$forceUpdate());
      }
    }
  },
  methods: {
    // isSelected로 CHK, UN_CHK 속성 결정
    selectForCartItems(item) {
      item.isSelected = !item.isSelected;
      // this.$emit('selectForCartItems', item); 장바구니 체크 목록 구매시 사용할지 말지 보류
    },
  }
}
</script>
<style scoped>
.cart-item:hover {
  background-color: #f5f5f5;
}

.checkbox {
  padding: 0 !important;
  margin: 0 !important;
}
</style>