<template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="currentPassword" label="Current Password" outlined type="password"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" @click="checkCurrentPassword">Check Current Password</v-btn>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="newPassword" label="New Password" outlined type="password"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="confirmNewPassword" label="Confirm New Password" outlined type="password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn :disabled="!isCurrentPasswordCorrect || !isPasswordMatching" color="primary"  @click="registerModifiedPassword">Save</v-btn>
            <v-btn color="secondary">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PassWordChangeForm',
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        isCurrentPasswordCorrect: false,
      };
    },
    computed: {
      isPasswordMatching() {
        return this.newPassword === this.confirmNewPassword && this.newPassword.length > 0;
      },
    },
    methods: {
      async checkCurrentPassword() {
        const checkPassword = {
            id: JSON.parse(localStorage.getItem("userInfo")).id ,
            password: this.currentPassword
        }
        try {
          const response = await axios.post("http://localhost:7777/mypage/passwordCheck", checkPassword );
          if (response.data) {
            this.isCurrentPasswordCorrect = true;
            alert("비밀번호가 일치합니다.")
          } else {
            this.isCurrentPasswordCorrect = false;
            alert("비밀번호가 불일치합니다.")
          }
        } catch (error) {
          console.error('Error while checking the current password:', error);
        }
      },
      async registerModifiedPassword() {
        const modifiedPassword = {
            id: JSON.parse(localStorage.getItem("userInfo")).id ,
            password: this.newPassword
        }
        try {
          const response = await axios.post("http://localhost:7777/mypage/registerModifiedPassword", modifiedPassword );
          if (response.data) {
            alert("비밀번호가 저장되었습니다.")
          } else {
            alert("비밀번호가 저장 안 됨 ㅋ.")
          }
        } catch (error) {
          console.error('Error while checking the current password:', error);
        }
      }
    },
  };
  </script>
  