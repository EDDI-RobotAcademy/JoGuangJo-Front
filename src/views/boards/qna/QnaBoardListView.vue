<template>
    <v-container>
        <qna-board-list-form :qnaBoards="qnaBoards" />
        <div class="register-button">
          <v-btn class="btn" :to="{ name: 'QnaBoardRegisterView' }">
            <span class="btn-text">게시물 작성</span>
          </v-btn>
        </div>
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
.btn {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
  }
  .btn-text {
    padding: 5px;
    margin-top: 2.5px;
}
</style>