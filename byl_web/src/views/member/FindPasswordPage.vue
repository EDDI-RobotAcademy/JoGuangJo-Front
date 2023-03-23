<template>
    <div>
      <find-password-form/>
    </div>
  </template>
  
  <script>
  
  import FindPasswordForm from "@/components/member/FindPasswordForm.vue";
  
  export default {
    name: "FindPasswordPage",
    components: {
      FindPasswordForm: FindPasswordForm,
    },
  }
  
  </script>
  
  <style scoped>
  
  </style>