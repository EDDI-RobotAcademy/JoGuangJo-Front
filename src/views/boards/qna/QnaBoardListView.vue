<template>
    <v-container>
        <h2>질문 게시판 입니다.</h2>
            <router-link :to="{ name: 'QnaBoardRegisterPage' }">
                게시물 작성
            </router-link>
        <qna-board-list-form :qnaBoards="qnaBoards" />
    </v-container>
</template>

<script>
import QnaBoardListForm from '@/components/boards/qna/QnaBoardListForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QnaBoardListForm },
    name: "QnaBoardListPage",
    computed: {
    ...mapState([
        'qnaBoards'
    ]),
    },
    mounted () {
    this.requestQnaBoardListToSpring()
    },
    methods: {
    ...mapActions([
        'requestQnaBoardListToSpring'
    ])
    }
}
</script>

<style>
</style>