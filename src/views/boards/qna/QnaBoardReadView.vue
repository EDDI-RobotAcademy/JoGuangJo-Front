<template>
    <v-container>
        <div align="center">
            <h2>질문 게시판 상세 글 읽기</h2>
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard"/>
            <p v-else>로딩중 .......... </p>
            <div v-if="isCurrentUser()">
                <router-link :to="{ name: 'QnaBoardModifyView', params: { qnaBoardId } }">
                    게시물 수정
                </router-link>
                <button @click="onDelete">삭제</button>
            </div>
            <router-link :to="{ name: 'QnaBoardListView' }">
            돌아가기
            </router-link>
        <table>
            <tr>
                <div>
                    <h1>댓글</h1>
                </div>
                <div>
                    <qna-comment-list-form :qnaComments="qnaComments"/>
                </div>
                    <qna-comment-register-form @submit="onSubmitRegister"/>
            </tr>
        </table>
        </div>
    </v-container>
</template>
<script>
import QnaBoardReadForm from '@/components/boards/qna/QnaBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'
import QnaCommentListForm from '@/components/boards/qna/comment/QnaCommentListForm.vue'
import QnaCommentRegisterForm from '@/components/boards/qna/comment/QnaCommentRegisterForm.vue'

export default {
    components: { QnaBoardReadForm, QnaCommentListForm, QnaCommentRegisterForm },
    name: "QnaBoardReadView",
    date() {
        return {
            currentUser : null,
        }
    },
    props: {
        qnaBoardId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(['qnaBoard', 'qnaComments'])
    },
    methods: {
        ...mapActions([
            'requestQnaBoardToSpring',
            'requestDeleteQnaBoardToSpring',
            'requestQnaCommentRegisterToSpring',
            'requestQnaCommentListFromSpring'
        ]),
        isCurrentUser() {
            return this.currentUser === this.qnaBoard.writer
        },
        async onDelete () {
            console.log('qnaBoardId: ' + this.qnaBoardId)
            await this.requestDeleteQnaBoardToSpring(this.qnaBoardId)
            await this.$router.push({ name: 'QnaBoardListView' })
        },
        async onSubmitRegister( payload ) {
            const { comment,writer, qnaCommentId } = payload
            const qnaBoardId = this.qnaBoardId
            console.log("댓글 등록" + qnaBoardId)
            await this.requestQnaCommentRegisterToSpring( { comment, writer, qnaBoardId, qnaCommentId} )
            await this.$router.push({
                name: 'QnaBoardReadView',
                params: { qnaBoardId: qnaBoard.data.qnaBoardId.toString() }
            })
        },
    },
    created () {
        console.log('qnaBoardId: ' + this.qnaBoardId)
        this.requestQnaBoardToSpring(this.qnaBoardId)
        this.requestQnaCommentListFromSpring(this.qnaBoardId)
    },
    mounted() {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
        this.currentUser = JSON.parse(userInfo).nickName
        console.log(this.currentUser, " : 로그인 한 유저의 닉네임")
    }
},
}

</script>

<style>
</style>



