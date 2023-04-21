<template>
  <div class="memberType-read-section">
    <div class="title-section">
      <h3>회원등급 변경 요청 처리하기</h3>
    </div>
        <v-card class="outer-card">
        <v-card class="inner-card">
        <div style="padding-left: 450px">
          <h4 style="padding-left: 100px">회원등급 변경 요청 상세정보</h4>
          <p><strong>요청글 번호:</strong> {{ memberTypeRequest.memberTypeRequestId }}</p>
          <p><strong>회원 ID:</strong> {{ memberTypeRequest.memberId }}</p>
          <p><strong>닉네임:</strong> {{ memberTypeRequest.nickname }}</p>
          <p><strong>회원 등급:</strong> {{ memberTypeRequest.memberType }}</p>
          <p><strong>요청 사유:</strong> {{ memberTypeRequest.message }}</p>
          <p><strong>등록 일자:</strong> {{ formattedDate(memberTypeRequest.regDate) }}</p>
        </div>
        <div align="center" class="justify-center" v-if="isManager">
          <v-btn class="sunghee v-btn mr-3" @click="acceptRequestHandler" >요청 승인</v-btn>
          <v-btn class="sunghee v-btn negative" @click="rejectRequestHandler">요청 거절</v-btn>
        </div>
      </v-card>
      </v-card>
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
  computed: {
    // 회원등급변경 요청은 관리자만 승인/거절 권한을 가집니다 (관리자만 이 버튼이 보임)
    isManager() {
    const memberType = JSON.parse(localStorage.getItem('userInfo')).memberType;
    return memberType === "Manager";
    }
  },
  methods: {
    formattedDate(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}.${month}.${day}`;
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
    }
  }
}
</script>

<style scoped>

.memberType-read-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title-section {
  margin: 50px 0 0 0;
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