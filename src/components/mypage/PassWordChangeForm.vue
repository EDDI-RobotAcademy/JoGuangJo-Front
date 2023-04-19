<template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="currentPassword" label="현재 비밀번호" outlined type="password"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="checkCurrentPasswordHandler">Check Current Password</v-btn>
          </v-col>

          <v-col cols="12">
            <v-text-field v-model="newPassword" label="비밀번호" outlined type="password"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field v-model="confirmNewPassword" label="비밀번호 확인" outlined type="password"></v-text-field>
          </v-col>

        </v-row>

        <v-row>

          <v-col cols="12">
            <v-btn color="primary"  @click="registerModifiedPasswordHandler">Save</v-btn>
            <v-btn color="secondary">Cancel</v-btn>
          </v-col>

        </v-row>
      </v-container>
    </v-card>
</template>
  
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'PassWordChangeForm',

  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    };
  },

  computed: {
    ...mapState("mypage", ["isCurrentPasswordCorrect"]),
    isPasswordMatching() {
      return this.newPassword === this.confirmNewPassword && this.newPassword.length > 0;
    },
  },

  methods: {
    ...mapActions("mypage", ["checkCurrentPassword", "registerModifiedPassword"]),
    async checkCurrentPasswordHandler() {
      const checkPassword = {
        id: JSON.parse(localStorage.getItem("userInfo")).id,
        password: this.currentPassword,
      };
      await this.checkCurrentPassword(checkPassword);
      alert("비밀번호 확인에 성공하였습니다.")
    },

    async registerModifiedPasswordHandler() {
      if(this.isCurrentPasswordCorrect || (this.newPassword === this.confirmNewPassword && this.newPassword.length)) {
        const modifiedPassword = {
          id: JSON.parse(localStorage.getItem("userInfo")).id,
          password: this.newPassword,
        };
        await this.registerModifiedPassword(modifiedPassword);
        if (this.$route.path !== "/") {
                    this.$router.push("/");
                }
      } else {
        alert("뭔가 잘 못 됨");
        console.log("this.isCurrentPasswordCorrect : " + this.isCurrentPasswordCorrect)
        console.log("this.newPassword : " + this.newPassword)
        console.log("this.confirmNewPassword : " + this.confirmNewPassword)
      }
    },
  },
};
</script>