<template>
  <v-container>
    <v-card>
      <form @submit.prevent="onSubmit">
        <v-card-title class="forColor"></v-card-title>
          <v-text-field v-model="title" class="forColor input-group title" label="제목" hide-details></v-text-field>
          <v-text-field :value="writer" class="forColor input-group title" label="작성자" readonly hide-details></v-text-field>
          <quill-editor v-model="content" style="height:350px" ref="editor"></quill-editor>
        <div class="d-flex justify-end">
          <v-btn class="btnForSubmit common-btn" type="submit">수정 완료</v-btn>
          <v-btn class="btnForBack common-btn" :to="{ name: 'QnaBoardReadView', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">취소</v-btn>
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
    name: "QnaBoardModifyForm",
    props: {
        qnaBoard: {
            type: Object,
            required: true,
        },
        qnaBoardId: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            title: '',
            content: '',
            writer: '',
            files: '',
        }
    },
    created () {
        this.title = this.qnaBoard.title
        this.writer = this.qnaBoard.writer
        this.content = this.qnaBoard.content
        this.regDate = this.qnaBoard.regDate
    },
    methods: {
    async onSubmit() {
      if (!this.content || !this.title) {
        alert('제목과 내용을 반드시 입력해주세요.');
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

<style>
  .btnForSubmit {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-top: 55px;
    margin-right: 10px;
    margin-bottom: 15px;
  }

    .btnForBack {
    background-color: rgb(208, 197, 197);
    color: black;
    border-radius: 25px;
    margin-top: 55px;
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