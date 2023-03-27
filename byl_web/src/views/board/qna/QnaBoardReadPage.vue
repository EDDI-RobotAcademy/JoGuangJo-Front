<template>
    <v-container>
        <div align="center">
            <h2>질문 게시판 상세 글 읽기</h2>
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard"/>
            <p v-else>로딩중 .......... </p>
            <router-link :to="{ name: 'QnaBoardModifyPage', params: { qnaBoardId } }">
                게시물 수정
            </router-link>
            <button @click="onDelete">삭제</button>
            <router-link :to="{ name: 'QnaBoardListPage' }">
            돌아가기
            </router-link>
        </div>
    </v-container>
</template>
<script>
import QnaBoardReadForm from '@/components/board/qna/QnaBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QnaBoardReadForm },
    name: "QnaBoardReadPage",
    props: {
        qnaBoardId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(['qnaBoard'])
    },
    methods: {
        ...mapActions([
            'requestQnaBoardToSpring',
            'requestDeleteQnaBoardToSpring',
        ]),
        async onDelete () {
            console.log('qnaBoardId: ' + this.qnaBoardId)
            await this.requestDeleteQnaBoardToSpring(this.qnaBoardId)
            await this.$router.push({ name: 'QnaBoardListPage' })
        },
    },
    created () {
        console.log('qnaBoardId: ' + this.qnaBoardId)
        this.requestQnaBoardToSpring(this.qnaBoardId)
    }
}

</script>

<style>
</style>