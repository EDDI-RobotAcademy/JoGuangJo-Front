<template>
    <v-container>
      <h3>책 기부글 등록 페이지</h3>
      <donate-board-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import DonateBoardRegisterForm from '@/components/donateBoard/DonateBoardRegisterForm.vue'
  import { mapActions } from 'vuex'
  
  export default {
      components: { DonateBoardRegisterForm },
      name: "DonateBoardRegisterPage",
      methods: {
          ...mapActions ([
              'requestCreateBoardToSpring'
          ]),
          async onSubmit (payload) {
              const board = await this.requestCreateBoardToSpring(payload)
              console.log('board: ' + JSON.stringify(board.data))
              await this.$router.push({
                  name: 'DonateBoardReadPage',
                  params: { boardId: board.data.boardId.toString() }
              })
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>