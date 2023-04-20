<template>
  <v-container>
    <sign-up-form @submit="onSubmit"/>
  </v-container>
</template>
  
<script>
import SignUpForm from "@/components/member/SignUpForm";
import { mapActions } from "vuex";

export default {
  name: "SignUpView",
  components: {
    SignUpForm
  },
  methods: {
    ...mapActions("account", ["signup"]),
    async onSubmit(payload) {
      const { email, password, nickName, city, street, addressDetail, zipcode } = payload;
      console.log(email);
      try {
        const res = await this.signup({ email, password, nickName, city, street, addressDetail, zipcode });
        alert("회원 가입 완료!" + res);
        this.$router.push("/sign-in");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("An error occurred while signing up.");
          console.log(error);
        }
      }
    },
  }
}
</script>

<style scoped>

</style>