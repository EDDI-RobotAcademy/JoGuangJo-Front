<template>
  <div class="notice-section">
    <v-card>
      <form @submit.prevent="onSubmit">
        <v-card-title class="forColor"></v-card-title>
          <v-text-field
          v-model="title" class="forColor input-group title"
          label="제목" placeholder="제목을 입력하세요"
          hide-details color="#FFC107"
          />
          <v-text-field :value="writer" class="forColor input-group title"
          label="작성자" readonly hide-details color="#FFC107"
          />
          <div align="center" class="justify-center">
            <textarea rows=10 v-model="content" class="notice-textarea"
            label="내용" placeholder="이곳에 공지 내용을 입력하세요"
            style="width:100%;"
            />
          </div>
      <div class="d-flex justify-end">
        <v-btn class="btnForSubmit common-btn" type="submit">등록</v-btn>
        <v-btn class="btnForBack common-btn" :to="{ name: 'NoticeBoardListView' }">돌아가기</v-btn>
      </div>
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NoticeBoardRegisterForm",
  data() {
    return {
      title: "",
      writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
      content: "",
    };
  },
  methods: {
    async onSubmit() {
      if (!this.content || !this.title) {
        alert('제목과 내용을 반드시 입력해주세요.');
        return;
      }
     if (this.title.length > 30) {
        alert("제목은 30자 이하만 입력해주세요.");
        return; 
      }
      const { title, writer, content } = this;
      this.$emit("submit", { title, writer, content });
    },
  },
};
</script>


<style scoped>
.notice-section {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 60vw;
  height: 60vh;
}

.notice-textarea {
  resize: none; /* 드래그로 크기 조절 막기 */
  padding: 20px;
}

.btnForSubmit {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin: 30px 10px 30px 10px;
  }

  .btnForBack {
    background-color: rgb(208, 197, 197);
    color: black;
    border-radius: 25px;
    margin: 30px 20px 30px 0px;
  }

  .forColor{
    background-color: #fee789 !important;
    margin: 0;
    padding-top: 20px;
  }
  .input-group{
    padding: 20px;
  }

</style>
