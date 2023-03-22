<template>
    <v-container>
      <donate-choice-form/>
    </v-container>
    </template>
    
    <script>
    import DonateChoiceForm from "@/components/donate/DonateChoiceForm";
    
    export default {
      name: "DonateChoicePage",
      components: {
        DonateChoiceForm
      }
    }
    </script>
    
    <style scoped>
    
    </style>