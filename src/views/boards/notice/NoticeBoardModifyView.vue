<template>
  <v-container>
    <div align="center" class="title-section">
      <h2 style="margin-bottom: 50px;">공지글 수정하기</h2>
      <notice-board-modify-form v-if="noticeBoard" :noticeBoard="noticeBoard" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>

import NoticeBoardModifyForm from '@/components/boards/notice/NoticeBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'
const noticeModule = 'noticeModule'

export default {
    components: { NoticeBoardModifyForm },
    name: "NoticeBoardModifyView",
    props: {
        noticeBoardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(noticeModule, ['noticeBoard'])
    },
    methods: {
        ...mapActions(noticeModule, [
            'requestNoticeBoardReadToSpring',
            'requestNoticeBoardModifyToSpring',
        ]),
        async onSubmit (payload) {
            const noticeBoardId = this.noticeBoardId

            await this.requestNoticeBoardModifyToSpring({ noticeBoardId, payload })
            await this.$router.push({
                name: 'NoticeBoardReadView',
                params: { noticeBoardId: noticeBoardId }
            })
        }
    },
    created () {
        this.requestNoticeBoardReadToSpring(this.noticeBoardId)
    }
}

</script>

<style scoped>

.title-section {
    margin: 0 0 50px 0;
}

</style>