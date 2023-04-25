<template>
    <v-container>
      <donate-register-form @submit="onSubmit"/>
    </v-container>
</template>
  
<script>
import { mapActions } from 'vuex'
const donateModule = 'donateModule'
import DonateRegisterForm from "@/components/boards/donate/DonateRegisterForm.vue";
  
export default {
    name: "DonateRegisterView",
    components: { DonateRegisterForm },
    methods: {
    ...mapActions (donateModule, ['requestDonateRegisterToSpring']),
        async onSubmit (payload) {
            console.log('payload', payload)
            await this.requestDonateRegisterToSpring(payload)
            await this.$router.push({ path: '/' })
        }
    }
}
  
</script>

<style scoped>

</style>