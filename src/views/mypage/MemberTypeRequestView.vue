<template>
    <div>
      <member-type-request-form></member-type-request-form>
    </div>
  </template>
  
  <script>
  import MemberTypeRequestForm from "@/components/mypage/MemberTypeRequestForm.vue";
  
  export default {
    name: "MemberRequestView",
    components: {
      MemberTypeRequestForm,
    },
  };
  </script>
  