<template>
  <v-container>
    <h2 style="margin: 0 0 -30px 0;">공지 게시판</h2>
    <div align="left" style="margin: 100px 0 -100px 0;">
      <v-btn
        v-if="isManager"
        router-link :to="{ name: 'NoticeBoardRegisterView' }"
        class="yellow-btn"
      >
        게시물 등록하기
      </v-btn>
    </div>
    
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

    isManager() {
    const userInfo = localStorage.getItem('userInfo');
    
    if (!userInfo) {
      return false;
    }
    
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

<style scoped>

</style>