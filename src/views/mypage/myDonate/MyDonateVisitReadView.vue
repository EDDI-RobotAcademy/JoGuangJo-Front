<template>
  <v-container class="justify-center" align="center">
    <my-donate-visit-read-form v-if="donateVisit" :donateVisit="donateVisit"/>
        <div v-else>로딩중 .......... </div>
            <div v-if="isCurrentUser()">
                <v-row>
                    <v-col>
                        <v-btn>
                            <router-link :to="{ name: 'MyDonateVisitModifyView', params: { donateVisitId } }">
                            수정
                            </router-link>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="onDelete">삭제</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>
                            <router-link :to="{ name: 'MyDonateVisitListView' }">
                            목록
                            </router-link>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MyDonateVisitReadForm from '@/components/mypage/myDonate/MyDonateVisitReadForm.vue'

export default {
    name: "MyDoanteVisitReadView",
    components: { MyDonateVisitReadForm },
    date() {
        return {
            currentUser : null,
        }
    },
    props: {
        donateVisitId: {
            type: String,
            required: true,
        },
    },
    created () {
        this.requestMyDonateVisitReadToSpring(this.donateVisitId)
    },
    mounted() {
        const userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
        this.currentUser = JSON.parse(userInfo).id
        console.log("로그인 한 유저의 memberId : " + this.currentUser)
        console.log("상세조회 요청한 글의 donateVisitId: " + this.donateVisitId)
        }
    },
    computed: {
        ...mapState(['donateVisit'])
    },
    methods: {
        ...mapActions([
            'requestMyDonateVisitReadToSpring',
            'requestMyDonateVisitDeleteSpring'
        ]),
        isCurrentUser() {
            return this.currentUser === this.donateVisit.memberId
        },
        async onDelete () {
            console.log('donateVisitId: ' + this.donateVisitId)
            await this.requestMyDonateVisitDeleteSpring(this.donateVisitId)
            await this.$router.push({ name: 'MyDonateVisitListView' })
        },
    },
}

</script>

<style>
</style>