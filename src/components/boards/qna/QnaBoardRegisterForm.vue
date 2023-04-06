<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>제목</td>
                <td>
                    <input type="text" v-model="title"/>
                </td>
            </tr>
            <tr>
                <td>작성자</td>
                <td>
                    <input  label="작성자" type="text" v-model="writer" disabled />
                </td>
            </tr>
            <tr>
                <td>내용</td>
                <td>
                    <textarea cols="50" rows="20" v-model="content"/>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name:'QnaBoardListPage' }">
                돌아가기
            </router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: "QnaBoardRegisterForm",
    data() {
        return {
            title: '제목을 입력 해주세요.',
            writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
            content: '질문 내용을 입력 해주세요.'
        }
    },
    methods: {
        onSubmit() {
            const { title, writer, content } = this
            this.$emit('submit', { title, writer, content })
        }
    }
}
</script>