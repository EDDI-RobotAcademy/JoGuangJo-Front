<template>
    <v-container>
        <div align="center"><br>
            <h2 class="h2">떠오르지 않는다. '상세 글 읽기'?</h2>
        <qna-board-read-form v-if="qnaBoard" :qnaBoard="qnaBoard"/>
            <p v-else>로딩중 .......... </p>
            <div class="btn">
              <div v-if="!fromMyPage">
                <v-btn
                   class="back-btn"
                   color="#fee789"
                   rounded
                   @click="onClick('QnaBoardListView')"
                >
                  목록으로
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                   class="back-btn"
                   color="#fee789"
                   rounded
                   @click="onClick('FindMyPostView')"
                >
                  목록으로
                </v-btn>
              </div>
            <div v-if="isCurrentUser()">
              <v-btn
                class="modify-btn"
                color="#fee789"
                rounded 
                :to="{ name: 'QnaBoardModifyView', params: { qnaBoardId } }"
              >
                수정
              </v-btn>

              <v-btn
                class="delete-btn ms-1"
                color="rgb(208, 197, 197);"
                rounded
                @click="onDelete"
              >
             삭제
              </v-btn>
          </div>
        </div>
    </div>
    <v-divider></v-divider>
    <table class="comment-form">
      <tr class="forComment">
        <div  class="comment-headline">
          <h1 class="ms-3">댓글</h1>
        </div>
                    <qna-comment-list-form :qnaComments="qnaComments"/>
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
        ...mapState("qnaModule", ['qnaBoard', 'qnaComments']),
        ...mapState("mypage", ['fromMyPage'])
    },
    methods: {
        ...mapActions("qnaModule", [
            'requestQnaBoardReadToSpring',
            'requestQnaBoardDeleteToSpring',
            'requestQnaCommentRegisterToSpring',
            'requestQnaCommentListToSpring'
        ]),
        isCurrentUser() {
            return this.currentUser === this.qnaBoard.writer
        },
        async onDelete () {
            console.log('qnaBoardId: ' + this.qnaBoardId)
            await this.requestQnaBoardDeleteToSpring(this.qnaBoardId)
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
        onClick(routeName) {
          console.log("snfjTdna");
          this.$router.push({ name: routeName });
        },
    },
    created () {
        console.log('qnaBoardId: ' + this.qnaBoardId)
        this.requestQnaBoardReadToSpring(this.qnaBoardId)
        this.requestQnaCommentListToSpring(this.qnaBoardId)
    },
    mounted() {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
        this.currentUser = JSON.parse(userInfo).nickName
        console.log(this.currentUser, " : 로그인 한 유저의 닉네임")
    }
    },
    beforeDestroy() {
      this.$store.dispatch('mypage/checkStartIsMyPage', false);
    },     
    destroyed() {
      console.log("destroyed")
    },
}


</script>

<style scoped>

.h2 {
  padding-top: 30px;
}

.btn {
  margin-left: 100px;
}

.back-btn {
  margin-right: 1040px;
  margin-left: -100px;
}

.modify-btn {
  margin-right: 5px;
}

.delete-btn {
  margin-right: 0px;
}

.forComment {
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.comment-form {
  margin-left: 10px;
  
}

.comment-headline {
  background-color: #fee789;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 80%;
}


</style>



