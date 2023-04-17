<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label>게시글번호</label>
            <input type="text" :value="qnaBoard.qnaBoardId" disabled/>
        </div>
        <div>
            <label for="title">제목</label>
            <input type="text" v-model="title" />
        </div>
        <div>
            <label for="writer">작성자</label>
            <input type="text" v-model="writer" disabled />
        </div>
        <div>
            <label for="content">내용</label>
            <quill-editor v-model="content" ref="editor"></quill-editor>
        </div>
        <div>
        <button type="submit">수정 완료</button>
        <router-link :to="{ name: 'QnaBoardReadView',
                            params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">
            취소
        </router-link>
        </div>
    </form>
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
        onSubmit () {
            let qnaData = new FormData()

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

            this.$emit('submit', qnaData)
        },
    },
    components: {
        'quill-editor': quillEditor
    },
}
</script>

<style>
</style>