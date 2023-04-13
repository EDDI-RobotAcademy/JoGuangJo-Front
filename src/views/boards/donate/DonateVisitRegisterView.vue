<template>
  <v-container>
    <donate-visit-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import DonateVisitRegisterForm from "@/components/boards/donate/DonateVisitRegisterForm.vue";

export default {
  name: "DonateVisitRegisterView",
  components: {
    DonateVisitRegisterForm
  },
  methods: {
    ...mapActions ([
            'requestDonateVisitRegisterToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestDonateVisitRegisterToSpring(payload)
            await this.$router.push({ path: '/' })
        }
    }
}

</script>

<style>

</style>