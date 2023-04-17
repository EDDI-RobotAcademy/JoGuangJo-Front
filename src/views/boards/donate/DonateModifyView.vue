<template>
    <v-container>
      <div align="center">
        <donate-modify-form
          v-if="donate"
          :donate="donate"
          :donateId="donateId"
          @submit="onSubmit"/>
        <div v-else>로딩중 ........</div>
      </div>
    </v-container>
  </template>
  
  <script>
  import DonateModifyForm from '@/components/boards/donate/DonateModifyForm.vue'
  import { mapActions, mapState } from 'vuex'
  const donateModule = 'donateModule'
  
  export default {
    name: "DonateModifyView",
    components: { DonateModifyForm },
    props: {
      donateId: {
        type: String,
        required: true,
      }
    },
    computed: {
      ...mapState( donateModule, ['donate'] )
    },
    methods: {
      ...mapActions( donateModule, [
        'requestDonateReadToSpring',
        'requestDonateModifyToSpring',
      ] ),
      async onSubmit (payload) {
        const donateId = this.donateId
        await this.requestDonateModifyToSpring({ donateId, payload })
        await this.$router.push({
          name: 'DonateReadView',
          params: { donateId: donateId }
        })
      }
    },
    async created() {
      console.log('donateId-parent', this.donateId)
      await this.requestDonateReadToSpring(this.donateId)
    }
  }
  </script>
  
  <style>
  </style>
  