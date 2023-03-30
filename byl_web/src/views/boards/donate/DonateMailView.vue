<template>
    <v-container>
      <donate-mail-form/>
    </v-container>
</template>

<script>
    import DonateMailForm from "@/components/boards/donate/DonateMailForm";
    
    export default {
      name: "DonateMailPage",
      components: {
        DonateMailForm
        
      }
    }
</script>

<style>

</style>