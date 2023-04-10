<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">제목</label>
      <input type="text" v-model="title" />
    </div>
    <div>
      <label for="writer">작성자</label>
      <input type="text" v-model="writer" />
    </div>
    <div>
      <label for="content">내용</label>
      <quill-editor v-model="content" ref="editor"></quill-editor>
    </div>
    <div>
      <button type="submit">등록</button>
      <router-link :to="{ name:'QnaBoardListView' }">돌아가기</router-link>
    </div>
  </form>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';

export default {
  name: "QnaBoardRegisterForm",
  data() {
    return {
      title: '제목을 입력 해주세요.',
      writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
      content: '질문 내용을 입력 해주세요.',
      files: '',
    }
  },
  methods: {
    async onSubmit() {

      if (!this.content || !this.title === null) {
        alert('제목과 내용을 반드시 입력해주세요.');
        return;
      }

      const qnaData = new FormData();
      
      const imgTags = this.$refs.editor.quill.root.querySelectorAll("img");

      for (const img of imgTags) {
        const dataUrl = img.src;
        const blob = dataUrl;
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