<template>
    <v-container class="donate-section">
      <div>
          <donate-read-form v-if="donate" :donate="donate"/>
          <div v-else>로딩중 .......... </div>
          <div v-if="isCurrentUser()">
            <div class="outer-btn-section">
                <div>
                    <v-btn router-link :to="{ name: 'DonateModifyView', params: { donateId } }"
                    class="yellow-btn mr-2">
                    수정
                    </v-btn>
                    <v-btn @click="onDelete" class="gray-btn">삭제</v-btn>
                </div>
                <div>
                    <v-btn router-link :to="{ name: 'DonateListView' }"
                    class="yellow-btn">
                    목록
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</v-container>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex'
  import DonateReadForm from '@/components/boards/donate/DonateReadForm.vue'
  const donateModule = 'donateModule'
  
  export default {
      name: "DonateReadView",
      components: { DonateReadForm },
      date() {
          return {
              currentUser : null,
          }
      },
      props: {
          donateId: {
              type: String,
              required: true,
          },
      },
      created () {
          this.requestDonateReadToSpring(this.donateId)
      },
      mounted() {
          const userInfo = localStorage.getItem('userInfo')
          if (userInfo) {
          this.currentUser = JSON.parse(userInfo).id
          console.log("로그인 한 유저의 memberId : " + this.currentUser)
          console.log("상세조회 요청한 글의 donateId: " + this.donateId)
          }
      },
      computed: {
          ...mapState( donateModule, ['donate'] )
      },
      methods: {
          ...mapActions( donateModule, [
              'requestDonateReadToSpring',
              'requestDonateDeleteToSpring'
          ] ),
          isCurrentUser() {
              return this.currentUser === this.donate.memberId
          },
          async onDelete () {
              console.log('donateId: ' + this.donateId)
              await this.requestDonateDeleteToSpring(this.donateId)
              await this.$router.push({ name: 'DonateListView' })
          },
      },
  }
  
  </script>
  
<style scope>
@import '@/css/donateStyle.css';

.outer-btn-section {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 15px 0;
}

</style>