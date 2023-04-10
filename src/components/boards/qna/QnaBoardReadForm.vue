<template>
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
                <input type="text" :value="qnaBoard.regDate" readonly/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <div v-html="qnaBoard.content" readonly/>
                <!-- <div>
                    <img :src="imagePath" alt="이미지">
                </div> -->
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
    data() {
    return {
    //   imagePath: require('@/assets/qnaUploadImgs/사용자가 업로드한 이미지 UUID 네임.png')
    };
  },
    props: {
        qnaBoard: {
            type: Object,
            required: true,
        },
        
    },
    
    components: {
        'quill-eitor': quillEditor
    },
}
</script>

<style>
</style>