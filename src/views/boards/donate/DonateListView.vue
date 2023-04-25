<template>
    <v-container>
        <donate-list-form :donates="donates" />
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DonateListForm from '@/components/boards/donate/DonateListForm.vue'
const donateModule = 'donateModule'

export default {
    name: "DonateListView",
    components: { DonateListForm },
    computed: {
        ...mapState( donateModule, ['donates'] ),
    },
    mounted () {
    this.requestDonateListToSpring()
    },
    // watch: {
    // $route() {
    //     this.requestDonateListToSpring();
    // }
    // },
    methods: {
        ...mapActions( donateModule, ['requestDonateListToSpring'] ),
    },
}

</script>

<style scoped>
</style>