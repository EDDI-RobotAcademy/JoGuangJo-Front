<template>
    <v-container>
        <my-donate-visit-list-form :donateVisits="donateVisits" />
    </v-container>
</template>

<script>
import MyDonateVisitListForm from '@/components/mypage/myDonate/MyDonateVisitListForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: "MyDonateListView",
    components: { MyDonateVisitListForm },
    computed: {
        ...mapState(['donateVisits']),
    },
    mounted () {
    this.requestMyDonateVisitListToSpring()
    },
    methods: {
        ...mapActions([
            'requestMyDonateVisitListToSpring'
        ]),
    },
}

</script>

<style>
</style>