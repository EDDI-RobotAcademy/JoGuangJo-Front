<template>
    <v-container>
        <form @submit="onSubmitRegister()">
            <table>
            <tbody>
            <br>
            <tr>
            &nbsp;&nbsp;&nbsp;
            <td>
            <input style="font-weight:bold;" label="작성자" type="text" v-model="writer" disabled />
            <textarea v-model="comment"
                    cols="60" rows="1"
                    placeholder="내용을 입력해 주세요."
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='내용을 입력해 주세요.'">
            </textarea>
            </td>
            <td>
            <v-btn type="submit">
                등록하기
            </v-btn>
            </td>
        </tr>
        </tbody>
        </table>
    </form>
    </v-container>
</template>

<script>

export default {
    name: "QnaCommentRegisterForm",
    data() {
    return {
        comment: '',
        writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
    }
    },
    methods: {
    onSubmitRegister() {
        const {comment, writer} = this
        this.$emit('submit', {comment, writer})
        },
    }
}
</script>

<style scoped>

</style>