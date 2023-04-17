
<template>
  <div>
    <cart-list-form @selectForCartItems="selectForCartItems"/>
  <button @click="deleteSelectedCartItems()">선택한 항목 삭제</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartListForm from '@/components/cart/CartListForm.vue'

export default {
    name: "CartListView",
    components: { CartListForm },
    computed: {
        ...mapState(['isAuthenticated', 'cartItems']),
    },
    methods:{
        ...mapActions([
          'requestCartListFromSpring',
          'requestDeleteCartItemToSpring'
          ]),
        selectForCartItems() {
          },
        // CartListView.vue에서 isSelecte = true 값을 가진 item 목록을 가져온다.
        deleteSelectedCartItems() {
          let deleteCartMessage = confirm("장바구니 목록에서 삭제 하시겠습니까?");
          const selectedItems = this.cartItems.filter(item => item.isSelected);
          const cartItemIds = selectedItems.map(item => item.cartItemId);
          this.requestDeleteCartItemToSpring(cartItemIds);
          console.log(`선택된 카트 아이템 ${cartItemIds}을 삭제합니다.`);
          } 
        },
          async mounted () {
            let memberId = JSON.parse(localStorage.getItem("userInfo")).id
            console.log("CartListView memberId : " + memberId);
            
            await this.requestCartListFromSpring(memberId);
        },
}

</script>

<style scoped>
button {
  float: right;
  color: white;
  background-color: red;
}
</style>