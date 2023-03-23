<template>
  <v-container>
    <div align="center">
      <h2>게시물 수정</h2>
      <review-board-modify-form v-if="board" :board="board" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>

import ReviewBoardModifyForm from '@/components/board/reviewBoard/ReviewBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { ReviewBoardModifyForm },
    name: "ReviewBoardModifyPage",
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
                name: 'ReviewBoardReadPage',
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