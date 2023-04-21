<template>
    <v-container>
        <div align="center">
            <h2 class="for-qna-modify">게시물 수정 중...</h2><br>
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


export default {
    components: { QnaBoardModifyForm },
    name: "QnaBoardModifyView",
    props: {
        qnaBoardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState("qnaModule", ['qnaBoard'])
    },
    methods: {
        ...mapActions("qnaModule", ['requestQnaBoardToSpring', 'requestQnaBoardModifyToSpring']),

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
.for-qna-modify{
        margin-top: 50px;
        margin-bottom: -15px;
        text-align: center;
}
</style>