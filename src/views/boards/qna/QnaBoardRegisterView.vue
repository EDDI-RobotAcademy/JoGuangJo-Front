<template>
    <v-container>
        <h2>질문 게시글 등록</h2><br><br>
        <qna-board-register-form @submit="onSubmit" />
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import QnaBoardRegisterForm from '@/components/boards/qna/QnaBoardRegisterForm.vue'


export default {
    components: { QnaBoardRegisterForm },
    name: "QnaBoardRegisterView",
    methods: {
        ...mapActions ([
            'requestCreateQnaBoardToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateQnaBoardToSpring(payload)
            await this.$router.push({
                name: 'QnaBoardListView'
            })
        }
    }
}
</script>