<template>
    <v-container>
        <div align="center">
            <h2>게시물 수정</h2>
            <question-board-modify-form v-if="questionBoard" :questionBoard="questionBoard" 
                    @submit="onSubmit"/>
            <p v-else>로딩중 ........</p>
        </div>
    </v-container>
</template>

<script>
import QuestionBoardModifyForm from '@/components/board/QuestionBoard/QuestionBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QuestionBoardModifyForm },
    name: "QuestionBoardModifyPage",
    props: {
        questionBoardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['questionBoard'])
    },
    methods: {
        ...mapActions([
            'requestQuestionBoardToSpring',
            'requestQuestionBoardModifyToSpring',
        ]),
        async onSubmit (payload) {
            const { title, content } = payload
            const questionBoardId = this.questionBoardId
            
            await this.requestQuestionBoardModifyToSpring({ questionBoardId, title, content })
            await this.$router.push({
                name: 'QuestionBoardReadPage',
                params: { quesitonBoardId: this.questionBoardId }
            })
        }
    },
    created () {
        this.requestQuestionBoardToSpring(this.questionBoardId)
    }
}
</script>

<style>
</style>