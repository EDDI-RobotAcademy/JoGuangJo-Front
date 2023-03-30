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
    props: {
        memberId: {
            type: String,
            required: true,
        }
    },
}

</script>

<style>

</style>