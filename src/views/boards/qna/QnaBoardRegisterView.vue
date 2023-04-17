<template>
    <v-container>
        <div class="header-form">
         <header-form/>
        </div><br>
        <h2>질문 게시글 등록</h2><br><br>
        <qna-board-register-form @submit="onSubmit" />
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import QnaBoardRegisterForm from '@/components/boards/qna/QnaBoardRegisterForm.vue'
import HeaderForm from "@/components/layout/HeaderForm.vue";

export default {
    components: { QnaBoardRegisterForm, HeaderForm },
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