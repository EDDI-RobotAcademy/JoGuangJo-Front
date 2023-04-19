<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="selectedMemberTypeLocal"
            :items="memberTypes"
            label="회원 종류"
            outlined
            @change="SET_SELECTED_MEMBER_TYPE(selectedMemberTypeLocal)"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="requestMessageLocal"
            label="등급 변경 요청 사유"
            outlined
            type="text"
            multiline
            @change="SET_SELECTED_REQUEST_MESSAGE(requestMessageLocal)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" @click="submitRequest({ selectedMemberType: selectedMemberTypeLocal, requestMessage: requestMessageLocal })">제출</v-btn>
        </v-col>
      </v-row>
    </v-container>
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