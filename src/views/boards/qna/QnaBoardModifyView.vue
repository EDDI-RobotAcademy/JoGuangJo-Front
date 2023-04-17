<template>
    <v-container>
        <div class="header-form">
        <!-- 헤더 로고,메뉴-->
         <header-form/>
        </div><br>
        <div align="center">
            <h2>게시물 수정</h2><br>
            <qna-board-modify-form v-if="qnaBoard" :qnaBoard="qnaBoard" 
            :qnaBoardId="qnaBoardId"
                    @submit="onSubmit"/>
            <p v-else>로딩중 ........</p>
        </div>
    </v-container>
</template>

<script>
import QnaBoardModifyForm from '@/components/boards/qna/QnaBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'
import HeaderForm from "@/components/layout/HeaderForm.vue";


export default {
    components: { QnaBoardModifyForm, HeaderForm },
    name: "QnaBoardModifyView",
    props: {
        qnaBoardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['qnaBoard'])
    },
    methods: {
        ...mapActions([
            'requestQnaBoardToSpring',
            'requestQnaBoardModifyToSpring',
        ]),
        async onSubmit (payload) {
            const qnaBoardId = this.qnaBoardId
            
            await this.requestQnaBoardModifyToSpring({ qnaBoardId, payload })
            await this.$router.push({
                name: 'QnaBoardReadView',
                params: { qnaBoardId: qnaBoardId }
            })
        }
    },
    beforeMount () {
        this.requestQnaBoardToSpring(this.qnaBoardId)
    },
}
</script>

<style>
</style>