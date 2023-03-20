<template>
    <v-container>
      <div align="center">
        <h3>책기부 게시판 기부글 상세조회 페이지</h3>
        <donate-board-read v-if="board" :board="board"/>
        <p v-else>게시물을 불러오고 있습니다 ...... </p>
        <router-link :to="{ name: 'DonateBoardModifyPage', params: { boardId } }">
          수정하기
        </router-link>
        <button @click="onDelete">삭제하기</button>
        <router-link :to="{ name: 'DonateBoardListPage' }">
          돌아가기
        </router-link>
      </div>
    </v-container>
  </template>
  
  <script>
  
  import DonateBoardRead from '@/components/donateBoard/DonateBoardRead.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
    components: { DonateBoardRead },
      name: "DonateBoardReadPage",
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
              await this.$router.push({ name: 'DonateBoardListPage' })
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