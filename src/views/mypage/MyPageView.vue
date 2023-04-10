<template>
    <div>
      <MyPageForm :myinfo="myPageData"/>
    </div>
</template>
  
<script>

import MyPageForm from '@/components/mypage/MyPageForm.vue';
import axios from 'axios';

export default {
    name: "MyPageView",
    components: {
        MyPageForm
    },
    data() {
      return {
        myPageData: null,
      };
    },
    mounted() {
      console.log("mounted 라이프 사이클 실행")
      
      let userInfo = localStorage.getItem("userInfo")
      console.log("초기 userInfo 데이터" + userInfo);
      
      let token =  userInfo.split(",")[0].split(":")[1];
      console.log("token 값 : " + token)

      let realtoken = token.substr(1, token.length - 2)
      console.log(realtoken)

      axios.post("http://localhost:7777/mypage/list", realtoken)
            .then((res) => {
                console.log('Response data:', res.data);
                this.myPageData = res.data;
            })

    }
};
</script>