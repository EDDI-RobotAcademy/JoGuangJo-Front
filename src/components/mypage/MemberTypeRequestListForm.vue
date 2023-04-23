<template>
  <div>
    <v-container max-width="1200">
      <v-row class="sunghee v-row padding">
        <v-data-table :headers="headers" :items="memberTypeRequests" @click:row="goToDetail">
          <template v-slot:item#createdAt="{ item }">
            {{ formatDate(item.createdAt) }}
          </template>
        </v-data-table>
      </v-row>
      </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters  } from "vuex";

export default {
  name: "MemberTypeRequestListForm",
  data() {
    return {
      headers: [
        { text: "번호", value: "memberTypeRequestId" },
        { text: "닉네임", value: "nickname" },
        { text: "회원 등급", value: "memberType" },
        { text: "등록 일자", value: "regDate" },
      ],
    };
  },
  computed: {
    ...mapGetters('mypage', ['memberTypeRequests']),
    ...mapState("mypage", ["memberTypeRequests"]),
  },
  created() {
    this.fetchMemberTypeRequests();
  },
  methods: {
    ...mapActions("mypage", ["fetchMemberTypeRequests"]),
    formatDate(date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
    goToDetail(item) {
      this.$router.push({ name: "MemberTypeReadView", params: { id: item.memberTypeRequestId } });
    },
  },
};
</script>
