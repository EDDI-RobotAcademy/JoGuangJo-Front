<!-- 메인페이지가 HomeView 입니다. -->
<template>
  <div>
    <home-view-form/>
  </div>
</template>


<script>
import HomeViewForm from '../components/layout/HomeViewForm.vue'

  export default {
    name: 'HomeView',
    components: {
      HomeViewForm
    },
  }
</script>
