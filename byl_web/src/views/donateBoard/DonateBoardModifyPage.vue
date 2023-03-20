<template>
    <v-container>
      <div align="center">
        <h3>책기부 게시판 게시글 수정 페이지</h3>
        <donate-board-modify-form v-if="board" :board="board" @submit="onSubmit"/>
        <p v-else> 페이지를 불러오고 있습니다 ......</p>
      </div>
    </v-container>
  </template>
  
  <script>
  
  import DonateBoardModifyForm from '@/components/donateBoard/DonateBoardModifyForm.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
      components: { DonateBoardModifyForm },
      name: "DonateBoardModifyForm",
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
              'requestBoardModifyToSpring',
          ]),
          async onSubmit (payload) {
              const { title, content, writer } = payload
              const boardId = this.boardId
  
              await this.requestBoardModifyToSpring({ boardId, title, content, writer })
              await this.$router.push({
                  name: 'DonateBoardReadPage',
                  params: { boardId: this.boardId }
              })
          }
      },
      created () {
          this.requestBoardToSpring(this.boardId)
      }
  }
  
  </script>
  
  <style>
  
  </style>