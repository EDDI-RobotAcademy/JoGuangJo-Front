<template>
  <v-card class="outer-card">
    <v-card class="inner-card" elevation="0">
        <div align="center" class="justify-center" padding="30px">
            <v-img
                :src="require('@/assets/logo/logo.png')"
                width="300px"/>
        </div>
        <h3>비밀번호 변경하기</h3>
      <v-container>
        <v-row class="sunghee v-row padding">
          <v-col cols="12">
            <v-text-field v-model="currentPassword" label="현재 비밀번호" outlined type="password" color="#FFDE59"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn class="sunghee v-btn" style="margin: -40px 0 30px 0" @click="checkCurrentPasswordHandler">현재 비밀번호 확인</v-btn>
          </v-col>

          <v-col cols="12">
            <v-text-field v-model="newPassword" label="비밀번호" outlined type="password" color="#FFDE59"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field v-model="confirmNewPassword" label="비밀번호 확인" outlined type="password" color="#FFDE59"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn class="sunghee v-btn" @click="registerModifiedPasswordHandler" style="margin-right: 10px">저장</v-btn>
            <v-btn class="sunghee v-btn negative">취소 </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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

<style scoped>
.title-section {
  margin: 50px 0 50px 0;
}

.outer-card {
    background-image: linear-gradient(to bottom, #FEE789, #FFDE59);
    margin: 15px 15px 30px 15px;
    padding: 15px;
}

.inner-card{
  padding: 30px;
}

</style>