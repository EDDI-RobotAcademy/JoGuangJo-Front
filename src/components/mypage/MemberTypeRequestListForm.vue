<template>
  <div>
    <v-container max-width="1200">
      <v-data-table :headers="headers" :items="memberTypeRequests" @click:row="goToDetail">
        <template v-slot:item#createdAt="{ item }">
          {{ formatDate(item.createdAt) }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MemberTypeRequestListForm",
  data() {
    return {
      headers: [
        { text: "Request Id", value: "memberTypeRequestId" },
        { text: "Nickname", value: "nickname" },
        { text: "Member Type", value: "memberType" },
        { text: "Registration Date", value: "regDate" },
      ],

      memberTypeRequests: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:7777/mypage/memberTypeRequestList");
      this.memberTypeRequests = response.data;
      console.log("this.memberTypeRequests : " + this.memberTypeRequests);
    } catch (error) {
      console.error("Error fetching member type requests:", error);
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
    goToDetail(item) {
      this.$router.push({ name: "MemberTypeReadForm", params: { id: item.memberTypeRequestId } });
    },
  },
};
</script>
