<template>
    <div>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >

            <v-text>
              <h3>방문 수거 입력 폼</h3>
            </v-text>

            <v-text-field
              label="이름"
              v-model="formData.name"
              :rules="nameRules"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <v-text-field
              label="이메일"
            ></v-text-field>

            <v-text-field
              label="휴대전화번호"
            ></v-text-field>

              <v-menu
                ref="visitDateMenu"
                v-model="visitDateMenu"
              >
              </v-menu>

              <v-menu
                ref="visitTimeMenu"
                v-model="visitTimeMenu"
              >
              </v-menu>

</template>

<script>
export default {
  name: "DonateVisitForm",
  data() {
    return {
      valid: false,
      formData: {
        name: "",
      },
      nameRules: [(v) => !!v || "이름을 입력하세요"],
    };
  },

  computed: {
  },

  methods: {


};
</script>
