<template>
 <v-container>
  <introduction-form/>
 </v-container>
</template>
  
<script>
import IntroductionForm from "@/components/layout/IntroductionForm.vue";
  
  export default {
    name: "IntroductionView",
    components: { IntroductionForm,
    }
  }
</script>

<style scoped>
</style>
  