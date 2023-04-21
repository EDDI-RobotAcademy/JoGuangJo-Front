<template>
  <v-container>
    <div align="center">
      <v-card v-if="qnaBoard" max-width="1500">
        <v-card-title class="headline qna-title">{{ qnaBoard.title }}</v-card-title>
        <v-card-subtitle class="subtitle-background">
          <div class="d-flex justify-content-between sutbtitleForSpan">
            <span>작성자: {{ qnaBoard.writer }}</span>
            <span>등록일: {{ formattedDate(qnaBoard.regDate) }}</span>
          </div>
        </v-card-subtitle>
        <v-divider class="divider"></v-divider>
        <v-card-text class="content-area">
        <!-- 이미지가 있는 경우 이미지와 내용(content)를 같이 보여준다. -->
        <!-- length 수정해야됨. 콘솔 에러는 발생하는데 이상하게 됨 -->
        <div v-if="qnaBoard.imageResourcePaths.length > 0">
        <v-carousel hide-delimiters class="carousel">
          <v-carousel-item v-for="(imagePath, idx) in qnaBoard.imageResourcePaths" :key="idx" cover>
            <img :src="require(`@/assets/qnaUploadImgs/${imagePath}`)" style="object-fit: contain; width: 100%; height: 100%;">
          </v-carousel-item>
        </v-carousel>
        <div class="qna-content" v-html="qnaBoard.content"></div>
        </div>
        <!-- 이미지가 없을 경우 내용만 보여준다. -->
        <div v-html="qnaBoard.content" class="qna-content"></div>
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
  
  <style scoped>

  .headline, .subtitle-background {
    background-color: #fee789;
  }
  .content-area {
  min-height: 350px;
  }

.divider {
    margin-top: -5px;
  }

.sutbtitleForSpan {
  padding-top: 40px;
}

.carousel {
  border: 1px solid  rgb(208, 197, 197);
  border-radius: 10px;
}


  </style>
