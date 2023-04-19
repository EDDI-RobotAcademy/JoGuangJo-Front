<template>
  <v-container>
    <div align="center">
      <notice-board-read-form v-if="noticeBoard" :noticeBoard="noticeBoard"/>
      <p v-else>로딩중 .......... </p>
      <v-btn
        v-if="canModify"
        router-link :to="{ name: 'NoticeBoardModifyView', params: { noticeBoardId } }"
      >
      수정하기
      </v-btn>
      <v-btn
        v-if="canDelete"
        @click="onDelete"
      >
        삭제하기
      </v-btn>
      <router-link :to="{ name: 'NoticeBoardListView' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>

import NoticeBoardReadForm from '@/components/boards/notice/NoticeBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'
const noticeModule = 'noticeModule'

export default {
  components: { NoticeBoardReadForm },
    name: "NoticeBoardReadView",
    props: {
        noticeBoardId: {
            type: String,
            required: true,
        }
    },
    created () {
      console.log('noticeBoardId: ' + this.noticeBoardId)
      this.requestNoticeBoardReadToSpring(this.noticeBoardId)
    },
    computed: {
        ...mapState(noticeModule, ['noticeBoard']),

    // (지영) 공지게시판에서 사용자의 memberType에 따라 등록,수정,삭제 버튼이 보이거나 안 보이게 제한하는 부분입니다.
    // 공지게시판에서는 관리자만 수정, 삭제 권한을 가집니다 (관리자만 수정, 삭제 버튼이 보임)
    canModify() {
        const memberType = JSON.parse(localStorage.getItem('userInfo')).memberType;
        return memberType === "Manager";
        },
        canDelete() {
        const memberType = JSON.parse(localStorage.getItem('userInfo')).memberType;
        return memberType === "Manager";
        }
    },
    methods: {
        ...mapActions(noticeModule, [
            'requestNoticeBoardReadToSpring',
            'requestNoticeBoardDeleteToSpring'
        ]),
        async onDelete () {
            await this.requestNoticeBoardDeleteToSpring(this.noticeBoardId)
            await this.$router.push({ name: 'NoticeBoardListView' })
        }
    }
}

</script>

<style>

</style>

<!-- 
const memberType: JSON.parse(localStorage.getItem('userInfo')).memberType 이런식으로 갖고오면 됨
-->