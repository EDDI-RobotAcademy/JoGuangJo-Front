<template>
    <div>
    <form @submit.prevent="onSubmit">
        <table>
        <tr>
            <td>게시글 번호</td>
            <td>
                <input type="text" :value="qnaBoard.qnaBoardId" disabled/>
            </td>
        </tr>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" v-model="title"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="qnaBoard.writer" disabled/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="qnaBoard.regDate" disabled/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <textarea cols="50" rows="20" v-model="content"/>
            </td>
        </tr>
        </table>

        <div>
        <button type="submit">수정 완료</button>
        <router-link :to="{ name: 'QnaBoardReadPage',
                            params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">
            취소
        </router-link>
        </div>
    </form>
    </div>
</template>

<script>
export default {
    name: "QnaBoardModifyForm",
    props: {
        qnaBoard: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            title: '',
            content: '',
            writer: '',
            regDate: '',
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
            const { title, content } = this
            this.$emit('submit', { title, content })
        }
    }
}
</script>

<style>
</style>