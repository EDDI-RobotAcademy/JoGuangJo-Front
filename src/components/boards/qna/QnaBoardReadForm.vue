<template>
    <v-container>
      <div align="center">
        <v-card v-if="qnaBoard" max-width="1100">
          <v-card-title class="headline">{{ qnaBoard.title }}</v-card-title>
          <v-card-subtitle class="subtitle-background">
            <div class="d-flex justify-content-between">
              <span>작성자: {{ qnaBoard.writer }}</span>
              <span class="qnaBoardId-text">게시물 번호: {{ qnaBoard.qnaBoardId }}</span>
              <span>등록일: {{ formattedDate(qnaBoard.regDate) }}</span>
            </div>
          </v-card-subtitle>
          <v-divider class="divider"></v-divider>
          <v-card-text class="content-area">
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(imagePath, idx) in qnaBoard.imageResourcePaths" :key="idx" cover>
              <img :src="require(`@/assets/qnaUploadImgs/${imagePath}`)" style="object-fit: contain; width: 100%; height: 100%;">
            </v-carousel-item>
          </v-carousel>
          <div class="qna-comment">{{ qnaBoard.content }}</div>
          </v-card-text>
        </v-card>
        <p v-else>로딩중 .......... </p>
      </div>
    </v-container>
  </template>
  
  <script>
  import { quillEditor } from 'vue-quill-editor';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  
  export default {
    name: "qnaBoardReadForm",
    props: {
      qnaBoard: {
        type: Object,
        required: true,
      },
    },
  
    components: {
      'quill-eitor': quillEditor,
    },
    methods: {
      // 등록일자 YYYY-MM-DD 형식 출력
      formattedDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
  
        return `${year}.${month}.${day}`;
      },
    },
  };
  </script>
  
  <style>
  .headline, .subtitle-background {
    background-color: #fee789;
  }
  .content-area {
  min-height: 300px;
  }

  .divider {
    margin-top: -5px;
  }

  .qnaBoardId-text {
    margin-left: 380px;
  }

  .qna-comment {
  font-size: 24px;
  line-height: 1.5; 
}
  </style>
