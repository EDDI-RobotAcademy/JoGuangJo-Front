<template>
  <v-container>
    <!-- <h2>공지 게시판</h2> -->
    <v-btn
      v-if="canRegister"
      router-link :to="{ name: 'NoticeBoardRegisterView' }"
    >
      게시물 등록하기
    </v-btn>
    
    <notice-board-list-form :noticeBoards="noticeBoards"/>
  </v-container>
</template>

<script>

import NoticeBoardListForm from '@/components/boards/notice/NoticeBoardListForm.vue'
import { mapActions, mapState } from 'vuex'
const noticeModule = 'noticeModule'

export default {
  components: { NoticeBoardListForm },
  name: "NoticeBoardListView",
  computed: {
    ...mapState( noticeModule, [ 'noticeBoards' ]),

    // (지영) 공지게시판에서 사용자의 memberType에 따라 등록,수정,삭제 버튼이 보이거나 안 보이게 제한하는 메서드입니다.
    // 공지게시판에서는 관리자만 등록 권한을 가집니다 (관리자만 등록버튼이 보임)
    canRegister() {
    const memberType = JSON.parse(localStorage.getItem('userInfo')).memberType;
    return memberType === "Manager";
    }
  },
  mounted () {
    this.requestNoticeBoardListToSpring()
  },
  methods: {
    ...mapActions( noticeModule, [ 'requestNoticeBoardListToSpring' ])
  }
}

</script>

<style>

</style>