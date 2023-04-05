<template>
    <v-container>
      <donate-choice-form/>
    </v-container>
</template>

<script>
  import DonateChoiceForm from "@/components/boards/donate/DonateChoiceForm";
  
  export default {
    name: "DonateChoicePage",
    components: {
      DonateChoiceForm
    }
  }
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>