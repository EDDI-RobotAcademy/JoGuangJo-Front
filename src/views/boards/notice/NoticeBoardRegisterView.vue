<template>
    <v-container>
        <h2>게시물 작성</h2>
        <notice-board-register-form @submit="onSubmit"/>
    </v-container>
</template>

<script>
import NoticeBoardRegisterForm from '@/components/boards/notice/NoticeBoardRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { NoticeBoardRegisterForm },
    name: "NoticeBoardRegisterView",
    methods: {
        ...mapActions ([
            'requestCreateNoticeBoardToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateNoticeBoardToSpring(payload)
            await this.$router.push({
            name: 'NoticeBoardListView'
        })
        }
    }
}


</script>

<style>

</style>