<template>
  <v-container>
    <div class="title-section">
      <h2>공지글 읽기</h2>
    </div>
    <div align="center">
    <notice-board-read-form v-if="noticeBoard" :noticeBoard="noticeBoard"/>
    <p v-else>로딩중 .......... </p>
      <div class="btn-section">
        <v-btn
          router-link :to="{ name: 'NoticeBoardListView' }"
          class="yellow-btn"
        >
        목록으로
        </v-btn>
        <div>
          <v-btn
            v-if="isManager"
            router-link :to="{ name: 'NoticeBoardModifyView', params: { noticeBoardId } }"
            class="yellow-btn mr-2"
          >
          수정
          </v-btn>
          <v-btn
            v-if="isManager"
            @click="onDelete"
            class="gray-btn"
          >
          삭제
          </v-btn>
        </div>
      </div>
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
      isManager() {
        const userInfo = localStorage.getItem('userInfo');
        
        if (!userInfo) {
          return false;
        }
        
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

<style scoped>

.title-section {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.btn-section {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin-top: 60px;
}

</style>
