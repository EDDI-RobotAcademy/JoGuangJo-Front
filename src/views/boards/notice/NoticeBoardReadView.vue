<template>
  <v-container>
    <div align="center">
      <notice-board-read-form v-if="noticeBoard" :noticeBoard="noticeBoard"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'NoticeBoardModifyView', params: { noticeBoardId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
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
    computed: {
        ...mapState(noticeModule, ['noticeBoard'])
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
    },
    created () {
        console.log('noticeBoardId: ' + this.noticeBoardId)
        this.requestNoticeBoardReadToSpring(this.noticeBoardId)
    }
}

</script>

<style>

</style>