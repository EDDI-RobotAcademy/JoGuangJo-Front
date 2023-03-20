<template>
    <v-container>
      <h3>책기부 게시판 목록 페이지</h3>
      <div align="right">
        <router-link :to="{ name: 'DonateBoardRegisterPage' }">
        책 기부하기
        </router-link>
      </div>
      
      <donate-board-list :boards="boards"/>
    </v-container>
  </template>
  
  <script>
  
  import DonateBoardList from '@/components/donateBoard/DonateBoardList.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
    components: { DonateBoardList },
    name: "DonateBoardListPage",
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