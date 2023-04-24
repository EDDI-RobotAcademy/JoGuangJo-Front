<template>
    <v-container>
        <h2 class="forQnaRegister">문의하기</h2><br><br>
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
        ...mapActions ("qnaModule", ['requestQnaBoardRegisterToSpring']),
        async onSubmit (payload) {
            await this.requestQnaBoardRegisterToSpring(payload)
            await this.$router.push({
                name: 'QnaBoardListView'
            })
        }
    }
}
</script>

<style scoped>
    .forQnaRegister {
        margin-top: 50px;
        margin-bottom: -40px;
        text-align: center;
    }
</style>