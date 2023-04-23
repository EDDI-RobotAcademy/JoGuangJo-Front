<template>
    <div class="forList">
        <v-container>
            <v-card-text class="for-now" v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
                <h3 class="h3">첫번째 댓글을 등록 해주세요.</h3>
            </v-card-text >
            <v-card-text v-else v-for="(qnaComment, index) in qnaComments" :key="qnaComment.qnaCommentId">
                <div class="qna-comment">
                <p style="font-weight:bold;">{{ qnaComment.writer }} </p>
                <p v-show="commentModify !== index">{{ qnaComment.comment }}</p>
                <v-text-field v-model="qnaComment.comment" label="댓글 수정" v-show="commentModify === index"></v-text-field>
                <button v-if="currentUser === qnaComment.writer && commentModify !== index" @click="startModify(index)">수정 | </button>
                <button v-if="currentUser === qnaComment.writer && commentModify === index" @click="saveComment(qnaComment)">수정 완료 | </button>
                <button v-if="currentUser === qnaComment.writer" @click="deleteComment(qnaComment)">삭제</button>
                </div>
            </v-card-text>
        </v-container>
    </div>
</template>




<script>
import axios from "axios";
import { mapActions } from 'vuex';

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
        ...mapActions("qnaModule", [
            'requestQnaCommentDeleteToSpring'
        ]),
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
        async deleteComment(payload ) {
            const { qnaCommentId } = payload
            await this.requestQnaCommentDeleteToSpring({qnaCommentId})
            await this.$router.go(this.$router.currentRoute)
        },
    },
    created() {
        this.currentUser = JSON.parse(localStorage.getItem('userInfo')).nickName
        },
}
</script>

<style scoped>
.qna-comment {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f8f8f8;
}

.qna-comment p:first-child {
    margin-top: 0;
}

.qna-comment button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: #a2a2a2;
}

.qna-comment button:hover {
    text-decoration: underline;
    color: #555;
}

.qna-comment button:active {
    color: #333;
}


.qna-comment button:not(:last-child) {
    margin-right: 5px;
}

.forList {
    width: 1275px;
}

.h3 {
    padding-top: 45px;
    text-align: center;
}

.for-now {
    margin-top: -30px;
}
</style>