<template>
  <v-container>
    <main-page-form/>
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
