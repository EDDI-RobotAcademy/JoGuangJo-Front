<template>
  <v-container class="container">
    <form @submit="onSubmitRegister()">
      <div class="input-group">
        <div class="input-field ms-5">
            <input class="for-writer" style="font-weight:bold;" label="author" type="text" v-model="writer" disabled />
        </div>
        <div class="input-field">
          <textarea v-model="comment"
            cols="70" rows="1"
            placeholder="댓글을 작성 해주세요."
            onfocus="this.placeholder=''"
            onblur="this.placeholder='댓글을 작성 해주세요.'"
            class="mt-1"
            style="height: 40px; resize: none; padding-top: 10px;">
          </textarea>
        </div>
        <div class="input-field ms-5 for-button">
          <v-btn type="submit">
            댓글 등록
          </v-btn>
        </div>
      </div>
    </form>
  </v-container>
</template>


<script>

export default {
    name: "QnaCommentRegisterForm",
        props: {
        qnaBoard: {
            type: Array
        },
    },
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
.for-button {
    padding-left: 70px;
    padding-top: 5px;
}

.for-writer {
    padding-top: 15px;
}

.container {
    border-top: 1px solid rgba(191, 188, 188, 0.579);
}

</style>