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
      <v-btn color="primary" @click="acceptRequestHandler">Accept Request</v-btn>
      <v-btn color="error" @click="rejectRequestHandler">Reject Request</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MemberTypeReadForm",
  computed: {
    ...mapGetters("mypage", ["memberTypeRequest"]),
  },
  created() {
    this.$store.dispatch("mypage/fetchMemberTypeRequest", this.$route.params.id);
    console.log("memberTypeRequest:", this.memberTypeRequest);
    console.log("memberTypeRequest:", JSON.parse(JSON.stringify(this.memberTypeRequest)));

  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
    acceptRequestHandler() {
      const requestData = {
        requestId: this.memberTypeRequest.memberTypeRequestId,
        memberId: this.memberTypeRequest.memberId,
        memberType: this.memberTypeRequest.memberType
      };
      this.$store.dispatch("mypage/acceptRequest", requestData);
      this.$router.push({ name: 'MemberTypeRequestListView' });
    },
    rejectRequestHandler() {
      const requestData = {
        requestId: this.memberTypeRequest.memberTypeRequestId
      };
      this.$store.dispatch("mypage/rejectRequest", requestData);
      this.$router.push({ name: 'MemberTypeRequestListView' });
    },
  },
}
</script>