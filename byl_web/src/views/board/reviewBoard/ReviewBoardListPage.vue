<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'ReviewBoardRegisterPage' }">
      게시물 작성
    </router-link>
    <review-board-list :boards="boards"/>
  </v-container>
</template>

<script>

import ReviewBoardList from '@/components/board/reviewBoard/ReviewBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { ReviewBoardList },
  name: "ReviewBoardListPage",
  computed: {
    ...mapState([
      'boards'
    ]),
  },
  mounted () {
    this.requestBoardListToSpring()
  },
  methods: {
    ...mapActions([
      'requestBoardListToSpring'
    ])
  }
}

</script>

<style>

</style>