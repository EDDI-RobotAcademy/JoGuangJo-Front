<template>
    <div>
      <MyPageForm></MyPageForm>
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
    mounted() {
        // axios.post("http://localhost:7777/my-page/list")
        //     .then(() => {
        //         alert("http://localhost:7777/my-page/list 실행")
        //         console.log("localStorage : " + localStorage.getItem("userInfo"))
        //     })
        
    }
}

</script>
