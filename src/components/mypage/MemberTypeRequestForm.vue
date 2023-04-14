<template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="selectedMemberType"
              :items="memberTypes"
              label="회원 종류"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="requestMessage"
              label="등급 변경 요청 사유"
              outlined
              type="text"
              multiline
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn color="primary" @click="submitRequest">제출</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  import axios from "axios";


  export default {
  name: "MemberTypeRequestForm",
  data() {
    return {
      selectedMemberType: null,
      requestMessage: "",
      memberTypes: ["일반 회원", "사업자", "관리자"],
    };
  },
  methods: {
    async submitRequest() {
      if (!this.selectedMemberType || !this.requestMessage) {
        alert("정보들을 입력하세요.");
        return;
      } 

      const memberTypeRequestData = {
        memberId: JSON.parse(localStorage.getItem("userInfo")).id,
        memberType: this.selectedMemberType,
        message: this.requestMessage,
      };
      console.log(memberTypeRequestData.memberId)
      console.log(memberTypeRequestData.memberType)
      console.log(memberTypeRequestData.message)
      try {
        const response = await axios.post("http://localhost:7777/mypage/memberTypeRequest", 
        memberTypeRequestData
        );
        if (response.data) {
          alert("잘 됨.");
        } else {
          alert("잘 안됨.");
        }
      } catch (error) {
        console.error("에러:", error);
      }
    },
  },
};
</script>
