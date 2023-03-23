<template>
    <v-container>
        <h2>질문 게시글 등록</h2>
        <question-board-register-form @submit="onSubmit" />
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import QuestionBoardRegisterForm from '@/components/board/QuestionBoard/QuestionBoardRegisterForm.vue'

export default {
    components: { QuestionBoardRegisterForm },
    name: "QuestionBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateQuestionBoardToSpring'
        ]),
        async onSubmit (payload) {
            console.log(payload)
            await this.requestCreateQuestionBoardToSpring(payload)
            await this.$router.push({
                name: 'QuestionBoardListPage'
            })
        }
    }
}
</script>