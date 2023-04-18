<template>
  <v-container>
    <div align="center">
      <h2>게시물 수정</h2>
      <notice-board-modify-form v-if="noticeBoard" :noticeBoard="noticeBoard" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>

import NoticeBoardModifyForm from '@/components/boards/notice/NoticeBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'

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
        ...mapState(['noticeBoard'])
    },
    methods: {
        ...mapActions([
            'requestNoticeBoardToSpring',
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
        this.requestNoticeBoardToSpring(this.noticeBoardId)
    }
}

</script>

<style>

</style>