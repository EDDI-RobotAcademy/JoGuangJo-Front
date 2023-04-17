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
            <div v-html="qnaBoard.content"></div>
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
    background-color: #fee789; /* 원하는 색상의 코드로 변경하세요. 예: #f5f5f5 */
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
  </style>



<!-- <template>
    <table>
        <tr>
            <td>게시물 번호</td>
            <td>
                <input type="text" :value="qnaBoard.qnaBoardId" readonly/>
            </td>
        </tr>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" :value="qnaBoard.title" readonly/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="qnaBoard.writer" readonly/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="formattedDate(qnaBoard.regDate)" readonly/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <div v-html="qnaBoard.content" readonly/>
            </td>
        </tr>
    </table>
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
        'quill-eitor': quillEditor
    },
    methods: {
    // 등록일자 YYYY-MM-DD HH:MM 형식 출력
    formattedDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
  }
}
</script>

<style>
</style> -->