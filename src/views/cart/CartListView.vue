
<template>
  <div>
    <cart-list-form @selectForCartItems="selectForCartItems"/>
      <v-btn class="for-buy-btn" @click="toBuySelectedCartItems()">구매하기</v-btn>
      <v-btn class="for-delete-btn" @click="deleteSelectedCartItems()">삭제하기</v-btn>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartListForm from '@/components/cart/CartListForm.vue'

export default {
    name: "CartListView",
    components: { CartListForm },
    computed: {
        ...mapState("accountModule", ['isAuthenticated']),
        ...mapState("cartModule", ["cartItems"]),
    },
    methods:{
        ...mapActions("cartModule", ['requestCartListFromSpring', 'requestDeleteCartItemToSpring']),
        selectForCartItems() {

          },
        // CartListView.vue에서 isSelecte = true 값을 가진 item 목록을 가져온다.
        deleteSelectedCartItems() {
          let deleteCartMessage = confirm("장바구니 목록에서 삭제 하시겠습니까?");
          const selectedItems = this.cartItems.filter(item => item.isSelected);
          const cartItemIds = selectedItems.map(item => item.cartItemId);
          this.requestDeleteCartItemToSpring(cartItemIds);
          console.log(`선택된 카트 아이템 ${cartItemIds}을 삭제합니다.`);
          window.location.reload(true);
          },
        toBuySelectedCartItems() {
          let toBuyCartMsg = confirm("선택한 상품을 구매 하시겠습니까?");
          const selectedItems = this.cartItems.filter(item => item.isSelected);
          const cartItemIds = selectedItems.map(item => item.cartItemId);

          const productIds = [];
          for (const itemId of cartItemIds) {
            const item = this.cartItems.find(item => item.cartItemId === itemId);
            const productId = item.product.productId;
            productIds.push(productId);
          }
          console.log(productIds + "구매하기 위한 선택한 상품 테스트");
          this.$router.push({ name: 'ProductOrderView', params: { productIds: productIds } });
          },
        },
          async mounted () {
            let memberId = JSON.parse(localStorage.getItem("userInfo")).id
            console.log("CartListView memberId : " + memberId);
            
            await this.requestCartListFromSpring(memberId);
        },
}

</script>

<style scoped>
  .for-buy-btn {
    background-color: #fee789 !important;
    width: 100px;
    height: 35px;
    color: black;
    border-radius: 25px;
    margin-left: 840px;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .for-delete-btn {
    background-color: rgb(208, 197, 197);
    width: 100px;
    height: 35px;
    color: black;
    border-radius: 25px;
    margin-bottom: 15px;
  }
</style>