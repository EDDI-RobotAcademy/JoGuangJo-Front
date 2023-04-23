<template>
  <v-card class="outer-card">
    <v-card class="inner-card" elevation="0">
        <div align="center" class="justify-center" padding="30px">
            <v-img
                :src="require('@/assets/logo/logo.png')"
                width="300px"/>
        </div>
        <h3>회원 등급 변경 요청하기</h3>
      <v-container>
      <v-row class="sunghee v-row padding">
        <v-col cols="12">
          <v-select
            v-model="selectedMemberTypeLocal"
            :items="memberTypes"
            label="회원 등급 종류"
            outlined
            @change="SET_SELECTED_MEMBER_TYPE(selectedMemberTypeLocal)"
            color="#FFDE59"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="sunghee v-row padding">
        <v-col cols="12">
          <v-text-field
            v-model="requestMessageLocal"
            label="등급 변경 요청 사유"
            outlined
            type="text"
            multiline
            @change="SET_SELECTED_REQUEST_MESSAGE(requestMessageLocal)"
            color="#FFDE59"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="justify-center" align="center">
        <v-btn class="sunghee v-btn" rounded width="300px" height="50px"
        @click="submitRequest({ selectedMemberType: selectedMemberTypeLocal, requestMessage: requestMessageLocal })"
        >
        제출하기
      </v-btn>
      <router-link :to="{ name: 'MyPageView' }">
            <v-btn rounded width="300px" height="50px" class="gray-btn">
              돌아가기
            </v-btn>
      </router-link>
      </div>
      </v-container>
  </v-card>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters  } from "vuex";

export default {
  name: "MemberTypeRequestForm",
  data() {
    return {
      selectedMemberTypeLocal: null,
      requestMessageLocal: null,
    };
  },
  computed: {
    ...mapGetters('mypage', ['selectedMemberType', 'requestMessage']),
    ...mapState("mypage", ["selectedMemberType", "requestMessage", "memberTypes"]),
  },
  methods: {
    ...mapActions("mypage", ["submitRequest"]),
    ...mapMutations("mypage", ["SET_SELECTED_MEMBER_TYPE", "SET_SELECTED_REQUEST_MESSAGE"]),
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