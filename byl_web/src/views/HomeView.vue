<template>
  <v-container>
 <!--<div>
      <router-link to="/donate-choice">책 기부하기</router-link>
     </div> 
    
    <nav>
      <router-link to="/question-board-list-page">질문 게시판</router-link>
    </nav> -->

    <Main-Page-Form/>

    <div>
      <router-link to="/donate-choice">책 기부하기</router-link>
    </div>
    
    <nav>
      <router-link to="/qna-board-list-page">질문 게시판</router-link>
    </nav>
  </v-container>
</template>


<script>
import MainPageForm from '@/components/main/MainPageForm.vue'

  export default {
    name: 'HomeView',
    components: { 
      MainPageForm
    },
  }
</script>
