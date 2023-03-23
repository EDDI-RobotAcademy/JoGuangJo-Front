<template>
    <v-container>
        <div align="center">
            <h2>질문 게시판 상세 글 읽기</h2>
        <question-board-read v-if="questionBoard" :questionBoard="questionBoard"/>
            <p v-else>로딩중 .......... </p>
        <router-link :to="{ name: 'QuestionBoardList' }">
        돌아가기
        </router-link>
    </div>
    </v-container>
</template>

<script>
import QuestionBoardRead from '@/components/board/QuestionBoard/QuestionBoardRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QuestionBoardRead },
    name: "QuestionBoardReadPage",
    props: {
        questionboardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['questionBoard'])
    },
    methods: {
        ...mapActions([
            'requestQuestionBoardToSpring'
        ]),
    
    created () {
        console.log('questionboardId: ' + this.questionboardId)
        this.requestQuestionBoardToSpring(this.questionboardId)
    }
}

</script>

<style>
</style>