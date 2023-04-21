<template>
    <v-container>
        <qna-board-list-form :qnaBoards="qnaBoards" />
    </v-container>
</template>

<script>
import QnaBoardListForm from '@/components/boards/qna/QnaBoardListForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { QnaBoardListForm },
    name: "QnaBoardListView",
    computed: {
    ...mapState("qnaModule", ['qnaBoards']),
    },
    mounted () {
    this.requestQnaBoardListToSpring()
    },
    methods: {
    ...mapActions("qnaModule", ['requestQnaBoardListToSpring'])
    }
}
</script>

<style scoped>
</style>