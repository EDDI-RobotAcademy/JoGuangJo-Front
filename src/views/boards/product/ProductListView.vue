<template>
  <v-container>
    <div class="header-form">
         <header-form/>
    </div>
  <!--  <h2>굿즈 상품 등록</h2> -->
    <product-list-form :products="products"
                                    @addToCart="addToCart"/>
    <button
      style="background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px;"
      @click="navigateToRegister"
    >
      판매 등록
    </button>
  </v-container>
</template>

<script>
import ProductListForm from "@/components/boards/product/ProductListForm.vue";
import { mapActions, mapState } from "vuex";
import HeaderForm from "@/components/layout/HeaderForm.vue";

export default {
  components: { ProductListForm, HeaderForm },
  name: "ProductListView",
  computed: {
    ...mapState(["products", "isAuthenticated"]),
  },
  mounted() {
    this.requestProductListToSpring();
  },
  methods: {
    ...mapActions([
      "requestProductListToSpring",
      "requestRegisterCartToSpring"
      ]),
addToCart(payload) {
  if (this.isAuthenticated === true) {
    const { productId }  = payload
    const memberId = JSON.parse(localStorage.getItem("userInfo")).id;
    let count = 1; // 수량은 현재 임시용
    this.requestRegisterCartToSpring({memberId, productId, count})
    let goToCartMessage = confirm("장바구니로 이동하시겠습니까?")
                if(goToCartMessage) {
                    this.$router.push({ name: 'CartListView'});
                }
  } else {
    this.$router.push({ name: 'SignInPage' })
  }
},
    navigateToRegister() {
      if (this.isAuthenticated) {
        this.$router.push({ name: "ProductRegisterView" });
      } else {
        this.$router.push({ name: "SignInPage" });
      }
    },
  },
};
</script>

<style scoped>
.header-form {
 margin-left: -20px;
}
.h2 {
    text-align: center;
  }
</style>>
