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
    onSubmit() {
      let qnaData = new FormData();

      const { title, writer, content } = this
      let qnaInfo = {
        title: title,
        writer: writer,
        content: content,
      }

      qnaData.append(
        "qnaInfo",
        new Blob([JSON.stringify(qnaInfo)], {type: "application/json"})
      )

      for (let idx = 0; idx < this.files.length; idx++) {
        qnaData.append('imageFileList', this.files[idx])
      }

      this.$emit('submit', qnaData);
}
  },
  components: {
    'quill-editor': quillEditor
  },
}
</script>