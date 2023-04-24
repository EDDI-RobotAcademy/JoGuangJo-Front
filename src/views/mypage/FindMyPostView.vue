<template>
      <find-my-post-form :qna-boards="qnaBoards"/>
</template>
  
<script>
  import { mapActions, mapState } from 'vuex';
  import FindMyPostForm from '@/components/mypage/FindMyPostForm.vue';
  
  export default {
    name: "FindMyPostView",
    components: {
      FindMyPostForm
    },
    computed: {
      ...mapState("mypage", ["qnaBoards"]),
    },
    mounted() {
      // let memberId = JSON.parse(localStorage.getItem('userInfo')).id;
      // console.log ("localStorage.getItem('userInfo') : " + localStorage.getItem('userInfo'));
      // console.log ("JSON.parse(localStorage.getItem('userInfo')).nickName : " + JSON.parse(localStorage.getItem('userInfo')).nickName);
      // console.log ("JSON.parse(localStorage.getItem('userInfo')).id : " + JSON.parse(localStorage.getItem('userInfo')).id);
      this.findMyPost()
    },
    methods: {
      // mypage모듈 안에 있는 actions 안에있는 findmypost함수를 가다.
      ...mapActions("mypage", ["findMyPost"]),
    },
    }
</script>