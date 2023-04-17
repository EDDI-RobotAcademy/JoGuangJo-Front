<template>
  <v-card>
    <v-card-title class="headline">장바구니</v-card-title>
    <v-card-text>
      <v-row class="subtitle-1 font-weight-bold">
        <v-col cols="1">▼</v-col>
        <v-col cols="2">NO</v-col>
        <v-col cols="5">상품명</v-col>
        <v-col cols="2">수량</v-col>
        <v-col cols="2">금액</v-col>
      </v-row>
      <v-divider class="my-3"></v-divider>
      <v-row v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <v-col cols="1">
          <v-checkbox class="checkbox" :checked="item.isSelected" @click="selectForCartItems(item)"></v-checkbox>
        </v-col>
        <v-col cols="2">{{ item.cartItemId }}</v-col>
        <v-col cols="5">{{ item.product.productName }}</v-col>
        <v-col cols="2">{{ item.count }}</v-col>
        <v-col cols="2">{{ item.product.price * item.count }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
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