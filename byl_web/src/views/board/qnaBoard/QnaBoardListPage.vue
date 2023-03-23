<template>
    <v-container>
        <h2>질문 게시판 입니다.</h2>
            <router-link :to="{ name: 'QnaBoardRegisterPage' }">
                게시물 작성
            </router-link>
        <qnaBoard-list :qnaBoards="qnaBoards" />
    </v-container>
</template>

<script>
import QnaBoardList from '@/components/board/qnaBoard/QnaBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QnaBoardList },
    name: "QnaBoardListPage",
    computed: {
    ...mapState([
        'qnaBoards'
        // 네이밍 회의 진행 후 수정 or 그대로 진행하기
    ]),
    },
    mounted () {
    this.requestQnaBoardListToSpring()
    },
    methods: {
    ...mapActions([
        'requestQnaBoardListToSpring'
    ])
    }
}
</script>

<style>
</style>