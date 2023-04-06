<template>
  <v-container>
  <!--  <h2>굿즈 상품 등록</h2> -->
    <product-list-form :products="products" />
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

export default {
  components: { ProductListForm },
  name: "ProductListView",
  computed: {
    ...mapState(["products", "isAuthenticated"]),
  },
  mounted() {
    this.requestProductListToSpring();
  },
  methods: {
    ...mapActions(["requestProductListToSpring"]),
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

<style>
  h2 {
    text-align: center;
  }
</style>
