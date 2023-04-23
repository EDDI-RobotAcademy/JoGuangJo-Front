<template>
    <div class="notice-section">
      <v-card>
        <form @submit.prevent="onSubmit">
          <v-card-title class="forColor"></v-card-title>
            <v-text-field
            v-model="title" class="forColor input-group title"
            label="제목"
            hide-details color="#FFC107"
            />
            <v-text-field :value="writer" class="forColor input-group title"
            label="작성자" readonly hide-details color="#FFC107"
            />
            <div align="center" class="justify-center">
              <textarea rows=10 v-model="content" class="notice-textarea"
              label="내용"
              style="width:100%;"
              />
            </div>
            <div class="btn-section">
                <v-btn type="submit" class="btnForSubmit">
                    수정 완료
                </v-btn>
            <router-link :to="{ name: 'NoticeBoardReadView',
                                params: { noticeBoardId: noticeBoard.noticeBoardId.toString() }}">
                <v-btn class="btnForBack">
                    취소
                </v-btn>
            </router-link>
            </div>
        </form>
      </v-card>
    </div>
  </template>
  
  <script>
  
  export default {
      name: "NoticeBoardModifyForm",
      props: {
          noticeBoard: {
              type: Object,
              required: true,
          }
      },
      data () {
          return {
              title: '',
              content: '',
              writer: '',
              regDate: '',
          }
      },
      created () {
          this.title = this.noticeBoard.title
          this.writer = this.noticeBoard.writer
          this.content = this.noticeBoard.content
          this.regDate = this.noticeBoard.regDate
      },
      methods: {
          onSubmit () {
              const { title, content, writer } = this
              this.$emit('submit', { title, content, writer })
          }
      }
  }
  
</script>
  
<style scoped>

.btn-section {
    display: flex;
    align-items: center;
    justify-items: right;
}

.btnForSubmit {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin: 30px 10px 30px 0;
  }
    .btnForBack {
    background-color: rgb(208, 197, 197);
    color: black;
    border-radius: 25px;
    margin: 30px 0 30px 0;
  }
    .forColor{
    background-color: #fee789 !important;
    margin: 0;
    padding-top: 20px;
  }
    .input-group{
    padding: 20px;
  }

  .notice-textarea {
  resize: none; /* 드래그로 크기 조절 막기 */
  padding: 20px;
}

  
  </style>