<template>
  <v-container>
    <h2>게시물 작성</h2>
    <review-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import ReviewBoardRegisterForm from '@/components/board/reviewBoard/ReviewBoardRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { ReviewBoardRegisterForm },
    name: "ReviewBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]),
        async onSubmit (payload) {
            const board = await this.requestCreateBoardToSpring(payload)
            console.log('board: ' + JSON.stringify(board.data))
            await this.$router.push({
                name: 'ReviewBoardReadPage',
                params: { boardId: board.data.boardId.toString() }
            })
        }
    }
}

</script>

<style>

</style>