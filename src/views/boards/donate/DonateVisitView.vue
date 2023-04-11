<template>
  <v-container>
    <donate-visit-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import axios from "axios";
import DonateVisitForm from "@/components/boards/donate/DonateVisitForm";

export default {
  name: "DonateVisitView",
  components: {
    DonateVisitForm
  },
  methods: {
      onSubmit (payload) {
        const { formData } = payload;
        axios.post("http://localhost:7777/donate/visit/register", formData)
            .then((res) => {
              alert("방문 수거 신청 완료" + res)
              console.log(JSON.stringify(formData) + " :을 백엔드로 전송하였습니다 (전송했다는거지 DB저장까지 됐는지는 아직 모름)")
              this.$router.push("/")
            })
            .catch((res) => {
              alert(res.response.data.message)
              console.log(JSON.stringify(formData) + ": 을 백엔드로 전송하지 못했습니다")
            })
      }
    }
}
</script>

<style>

</style>