<template>
    <v-container>
        <h2>질문 게시판 입니다.</h2>
        <question-board-list :questionboards="questionboards" />
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
        'questionboards'
        // 네이밍 회의 진행 후 수정 or 그대로 진행하기
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