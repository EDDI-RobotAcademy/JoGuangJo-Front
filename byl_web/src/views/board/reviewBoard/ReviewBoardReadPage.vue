<template>
  <v-container>
    <div align="center">
      <h2>Vue + Spring 게시판 읽기</h2>
      <review-board-read v-if="board" :board="board"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'ReviewBoardModifyPage', params: { boardId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'ReviewBoardListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>

import ReviewBoardRead from '@/components/board/reviewBoard/ReviewBoardRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { ReviewBoardRead },
    name: "ReviewBoardReadPage",
    props: {
        boardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',
            'requestDeleteBoardToSpring'
        ]),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.boardId)
            await this.$router.push({ name: 'JpaBoardListPage' })
        }
    },
    created () {
        console.log('boardId: ' + this.boardId)
        this.requestBoardToSpring(this.boardId)
    }
}

</script>

<style>

</style>