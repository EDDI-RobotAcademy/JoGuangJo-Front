<template>
  <v-container>
    <!-- <h2>공지 게시판</h2> -->
    <router-link :to="{ name: 'NoticeBoardRegisterView' }">
      게시물 작성
    </router-link>
    <notice-board-list-form :noticeBoards="noticeBoards"/>
  </v-container>
</template>

<script>

import NoticeBoardListForm from '@/components/boards/notice/NoticeBoardListForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { NoticeBoardListForm },
  name: "NoticeBoardListView",
  computed: {
    ...mapState([
      'noticeBoards'
    ]),
  },
  mounted () {
    this.requestNoticeBoardListToSpring()
  },
  methods: {
    ...mapActions([
      'requestNoticeBoardListToSpring'
    ])
  }
}

</script>

<style>

</style>