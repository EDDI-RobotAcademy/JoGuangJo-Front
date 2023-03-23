<template>
    <v-container>
        <h2>질문 게시글 등록</h2>
        <qna-board-register-form @submit="onSubmit" />
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import QnaBoardRegisterForm from '@/components/board/qnaBoard/QnaBoardRegisterForm.vue'

export default {
    components: { QnaBoardRegisterForm: QnaBoardRegisterForm },
    name: "QnaBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateQnaBoardToSpring'
        ]),
        async onSubmit (payload) {
            console.log(payload)
            await this.requestCreateQnaBoardToSpring(payload)
            await this.$router.push({
                name: 'QnaBoardListPage'
            })
        }
    }
}
</script>