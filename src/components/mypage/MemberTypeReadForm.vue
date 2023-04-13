<template>
    <div>
      <v-container>
        <h2>Member Type Request Details</h2>
        <div>
          <p><strong>Request ID:</strong> {{ memberTypeRequest.memberTypeRequestId }}</p>
          <p><strong>Member ID:</strong> {{ memberTypeRequest.memberId }}</p>
          <p><strong>Nickname:</strong> {{ memberTypeRequest.nickname }}</p>
          <p><strong>Member Type:</strong> {{ memberTypeRequest.memberType }}</p>
          <p><strong>Message:</strong> {{ memberTypeRequest.message }}</p>
          <p><strong>Registration Date:</strong> {{ formatDate(memberTypeRequest.regDate) }}</p>
        </div>
        <v-btn color="primary" @click="acceptRequest">Accept Request</v-btn>
        <v-btn color="error" @click="rejectRequest">Reject Request</v-btn>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MemberTypeReadForm",
    data() {
      return {
        memberTypeRequest: {},
      };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:7777/mypage/memberTypeRequest/${this.$route.params.id}`);
        this.memberTypeRequest = response.data;
      } catch (error) {
        console.error("Error fetching member type request details:", error);
      }
    },
    methods: {
      formatDate(date) {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      },
      async acceptRequest() {
        // Handle request acceptance logic here
        const requestData = {
            requestId: this.memberTypeRequest.memberTypeRequestId,
            memberId: this.memberTypeRequest.memberId
        };
        try {
            axios.post('http://localhost:7777/mypage/rollrequestaccept', requestData)
            this.$router.push({ name: 'MemberTypeRequestListView' });
        } catch (error) {
            console.log("에러 발생 : " , error);
        }
      },
      async rejectRequest() {
        // Handle request rejection logic here
        try {
            axios.post('http://localhost:7777/mypage/rollrequestreject', this.memberTypeRequest.memberTypeRequestId)
            this.$router.push({ name: 'MemberTypeRequestListView' });
        } catch (error) {
            console.log("에러 발생 : " , error);
        } 
      },
    },
  };
  </script>
  