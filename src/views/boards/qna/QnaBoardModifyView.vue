<template>
    <v-container>
        <div align="center">
            <h2>게시물 수정</h2>
            <qna-board-modify-form v-if="qnaBoard" :qnaBoard="qnaBoard" 
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
    name: "QnaBoardModifyPage",
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
            const { title, content } = payload
            const qnaBoardId = this.qnaBoardId
            
            await this.requestQnaBoardModifyToSpring({ qnaBoardId, title, content })
            await this.$router.push({
                name: 'QnaBoardReadPage',
                params: { qnaBoardId: this.qnaBoardId }
            })
        }
    },
    created () {
        this.requestQnaBoardToSpring(this.qnaBoardId)
    }
}
</script>

<style>
</style>