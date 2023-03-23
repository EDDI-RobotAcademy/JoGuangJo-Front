<template>
    <v-container>
        <h2>질문 게시판 입니다.</h2>
            <router-link :to="{ name: 'QuestionBoardRegisterPage' }">
                게시물 작성
            </router-link>
        <question-board-list :questionBoards="questionBoards" />
    </v-container>
</template>

<script>
import QuestionBoardList from '@/components/board/QuestionBoard/QuestionBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QuestionBoardList },
    name: "QuestionBoardListPage",
    computed: {
    ...mapState([
        'questionBoards'
    ]),
    },
    mounted () {
    this.requestQuestionBoardListToSpring()
    },
    methods: {
    ...mapActions([
        'requestQuestionBoardListToSpring'
    ])
    }
}
</script>

<style>
</style>