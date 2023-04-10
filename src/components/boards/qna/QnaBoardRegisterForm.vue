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
      <quill-editor v-model="content" ref="editor" ></quill-editor>
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
      const qnaData = new FormData();
      const imgTags = this.$refs.editor.quill.root.querySelectorAll("img");
      for (const img of imgTags) {
        const dataUrl = img.src;
        const blob = this.dataURLtoBlob(dataUrl);
        console.log(blob)
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
    // base64 디코딩 하는 메소드
    // 현재 적용이 안되는 것 같음 차후 삭제 예정
    dataURLtoBlob(dataUrl) {
      const arr = dataUrl.split(",");
      console.log(dataUrl, "이거 url임");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      const n = bstr.length;
      const u8arr = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        u8arr[i] = bstr.charCodeAt(i);
      }
      return new Blob([u8arr], { type: mime });
    }
  },
  components: {
    'quill-editor': quillEditor
  },
}
</script>