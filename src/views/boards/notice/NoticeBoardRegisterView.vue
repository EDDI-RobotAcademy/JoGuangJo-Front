<template>
    <div class="notice-section">
        <div class="title-section">
            <h2>공지글 작성하기</h2>
        </div>
        <notice-board-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import NoticeBoardRegisterForm from '@/components/boards/notice/NoticeBoardRegisterForm.vue'
import { mapActions } from 'vuex'
const noticeModule = 'noticeModule'

export default {
    components: { NoticeBoardRegisterForm },
    name: "NoticeBoardRegisterView",
    methods: {
        ...mapActions ( noticeModule, [ 'requestNoticeBoardRegisterToSpring' ]),
        async onSubmit (payload) {
            await this.requestNoticeBoardRegisterToSpring(payload)
            await this.$router.push({
            name: 'NoticeBoardListView'
        })
        }
    }
}


</script>

<style scoped>
.notice-section {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.title-section {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 20px;
}

</style>