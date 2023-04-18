<template>
    <v-container>
        <div class="header-form">
         <header-form/>
        </div>
        <div align="center"><br>
            <h2 class="h2">질문 게시판 상세 글 읽기</h2>
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard"/>
            <p v-else>로딩중 .......... </p>
            <div class="btn">
            <div v-if="isCurrentUser()">
              <v-btn
                 class="back-btn"
                 color="#fee789"
                 rounded
                 :to="{ name: 'QnaBoardListView' }"
              >
                돌아가기
              </v-btn>

              <v-btn
                class="modify-btn"
                color="#fee789"
                rounded 
                :to="{ name: 'QnaBoardModifyView', params: { qnaBoardId } }"
              >
                게시물 수정
              </v-btn>

              <v-btn
                class="delete-btn"
                color="#fe6133"
                rounded
                @click="onDelete"
              >
             삭제
              </v-btn>
          </div>
        </div>
    </div><br>         
    <table class="comment-form">
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
    </v-container>
</template>
<script>
import QnaBoardReadForm from '@/components/boards/qna/QnaBoardReadForm.vue'
import { mapActions, mapState } from 'vuex'
import QnaCommentListForm from '@/components/boards/qna/comment/QnaCommentListForm.vue'
import QnaCommentRegisterForm from '@/components/boards/qna/comment/QnaCommentRegisterForm.vue'
import HeaderForm from "@/components/layout/HeaderForm.vue";

export default {
    components: { QnaBoardReadForm, QnaCommentListForm, QnaCommentRegisterForm, HeaderForm },
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
        ...mapState("qnaModule", ['qnaBoard', 'qnaComments'])
    },
    methods: {
        ...mapActions("qnaModule", [
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

<style scoped>
.header-form {
  width: 100%;
}

.btn {
  margin-left: 100px;
}

.back-btn {
  margin-right: 700px;
  margin-left: -100px;
}

.modify-btn {
  margin-right: 5px;
}

.delete-btn {
  margin-right: 0px;
}

.comment-form {
  margin-left: 220px;
}
</style>



