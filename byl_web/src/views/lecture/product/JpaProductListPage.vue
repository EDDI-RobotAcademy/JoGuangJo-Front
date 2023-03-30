<template>
  <v-container>
    <h2>굿즈 상품 등록</h2>
    <button
      style="background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px;"
      @click="navigateToRegister"
    >
      판매 등록
    </button>
    <jpa-product-list :products="products" />
  </v-container>
</template>

<script>
import JpaProductList from "@/components/lecture/product/JpaProductList.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { JpaProductList },
  name: "JpaProductListPage",
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
        this.$router.push({ name: "JpaProductRegisterPage" });
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
