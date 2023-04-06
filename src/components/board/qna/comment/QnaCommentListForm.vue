<template>
    <div>
        <v-container>
            <v-card-text v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
                <p>현재 등록된 댓글이 없습니다.</p>
            </v-card-text >
            <v-card-text v-else v-for="(qnaComment, index) in qnaComments" :key="qnaComment.qnaCommentId">
                <div class="qna-comment">
                <p style="font-weight:bold;">{{ qnaComment.writer }} </p>
                <p v-show="commentModify !== index">{{ qnaComment.comment }}</p>
                <v-text-field v-model="qnaComment.comment" label="댓글 수정" v-show="commentModify === index"></v-text-field>
                <button v-if="currentUser === qnaComment.writer && commentModify !== index" @click="startModify(index)">수정 | </button>
                <button v-if="currentUser === qnaComment.writer && commentModify === index" @click="saveComment(qnaComment)">수정 완료 | </button>
                </div>
            </v-card-text>
        </v-container>
    </div>
</template>




<script>
import axios from "axios";
export default {
    name: "QnaCommentListForm",
    props: {
        qnaComments: {
            type: Array
        },
        qnaComment: {
            type: Object
        },
    },
    data() {
        return {
            commentModify: null,
            currentUser: null,
        }
    },
    methods: {
        startModify(index) {
            this.commentModify = index;
        },

        saveComment(payload) {
            this.commentModify = null;
            const { qnaCommentId, comment } = payload;

            return axios.put(`http://localhost:7777/qnaBoard/qnaComment/${qnaCommentId}`, 
                {comment})
                .then((res) => {
                    alert("질문 게시글의 댓글 " + qnaCommentId + "번 -> " + comment  +"로 수정 성공", res.data)
                })
                .catch(() => {
                    alert("질문 게시글의 댓글 " + qnaCommentId + "번 수정 실패")
                })
        },
    },
    created() {
        this.currentUser = JSON.parse(localStorage.getItem('userInfo')).nickName
        },
}
</script>

<style>
.qna-comment {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
