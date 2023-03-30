<template>
    <v-container>
        <form>
        <table v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
            <div>
                <p>현재 등록된 댓글이 없습니다.</p>
            </div>
        </table>
        <table v-else v-for="qnaComment in qnaComments" :key="qnaComment.qnaCommentId">
            <tbody>
                <tr>
                    <div class="comment">
                            {{ qnaComment.comment }} 
                    </div>
                            <button id="update-comment-btn" @click="updateComment()">댓글 수정</button>
                </tr>
            </tbody>
        </table>
        </form>
    </v-container>
</template>

<!-- <template>
    <div>
        <v-container>
            <v-card-text v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
                <p>현재 등록된 댓글이 없습니다.</p>
            </v-card-text >
            <v-card-text v-else v-for="qnaComment in qnaComments" :key="qnaComment.qnaCommentId">
                <p>{{ qnaComment.writer }} </p>
                <p>{{ qnaComment.comment}}</p>
            <!--  해당 댓글을 작성한 사람만 수정/삭제 버튼 활성화시키자 -->
                <v-text-field v-model="qnaComment.comment" label="댓글 수정" v-if="commentUpdate">
                </v-text-field>
                <button v-if="!commentUpdate" @click="commentUpdateBtn">수정</button><button v-if="commentUpdate" @click="commentUpdateSaveBtn">수정 완료</button>
                |<button>삭제</button>
            </v-card-text>
        </v-container>
    </div>
</template> -->




<script>
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
            commentUpdate: false
        }
    },
    methods: {
        commentUpdateBtn() {
            console.log("수정 버튼 누름")
            this.commentUpdate = !this.commentUpdate
    },
    commentUpdateSaveBtn() {
        console.log("수정 완료 버튼 누름")
    }
        }
    }
</script>
