<template>
  <v-container>
    <v-card>
      <form @submit.prevent="onSubmit">
        <v-card-title class="forColor"></v-card-title>
          <v-text-field v-model="title" class="forColor input-group title" label="이 곳에 제목을 입력해주세요." hide-details></v-text-field>
          <v-text-field :value="writer" class="forColor input-group title" label="작성자" readonly hide-details></v-text-field>
        <quill-editor v-model="content" style="height: 350px;" :options="{placeholder: '이 곳에 질문하실 내용을 입력해주세요.'}" ref="editor"></quill-editor>
      <div class="d-flex justify-end">
        <v-btn class="btnForSubmit common-btn" type="submit">등록</v-btn>
        <v-btn class="btnForBack common-btn" :to="{ name: 'QnaBoardListView' }">돌아가기</v-btn>
      </div>
      </form>
    </v-card>
  </v-container>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';

export default {
  name: "QnaBoardRegisterForm",
  data() {
    return {
      title: '',
      writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
      content: '',
      files: '',
    }
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

      const qnaData = new FormData();
      
      const imgTags = this.$refs.editor.quill.root.querySelectorAll("img");

      for (const img of imgTags) {
        const imgUrl = img.src;
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], 'image.png', { type: 'image/png' });
        qnaData.append("imageFileList", file);
      }

      qnaData.append(
        "qnaInfo",
        new Blob([JSON.stringify({
          title: this.title,
          writer: this.writer,
          content: this.content,
        })], { type: "application/json" })
      );

      this.$emit("submit", qnaData);
    },
  },
  components: {
    'quill-editor': quillEditor
  },
}
</script>

<style scoped>
  .btnForSubmit {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-top: 80px;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .btnForBack {
    background-color: rgb(208, 197, 197);
    color: black;
    border-radius: 25px;
    margin-top: 80px;
    margin-right: 10px;
    margin-bottom: 15px;
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



