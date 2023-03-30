<template>
    <v-container>
        <form @submit="onSubmitRegister()">
            <table>
            <tbody>
            <br>
            <tr>
            &nbsp;&nbsp;&nbsp;
            <td>
            <textarea v-model="comment"
                    cols="60" rows="3"
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
    }
    },
    methods: {
    onSubmitRegister() {
        const {comment} = this
        this.$emit('submit', {comment})
        },
    }
}
</script>

<style scoped>

</style>