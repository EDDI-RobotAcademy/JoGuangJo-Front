<template>
    <v-container>
    <donate-search-form/>
  </v-container>
</template>

<script>
  import DonateSearchForm from "@/components/donate/DonateSearchForm.vue";
  
  export default {
    name: "DonateSearchPage",
    components: {
      DonateSearchForm
    }
  }
</script>

<style>

</style>