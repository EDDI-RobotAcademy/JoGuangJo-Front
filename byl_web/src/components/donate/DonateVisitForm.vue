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
              v-model="formData.email"
              :rules="emailRules"
              prepend-icon="mdi-email"
              required
            ></v-text-field>

            <v-text-field
              label="휴대전화번호"
              v-model="formattedPhoneNumber"
              :rules="phoneNumberRules"
              prepend-icon="mdi-cellphone"
              required
              @input="updatePhoneNumber"
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
        email: "",
        phoneNumber: "",
      },
      nameRules: [(v) => !!v || "이름을 입력하세요"],
      emailRules: [
        (v) => !!v || "이메일을 입력하세요",
        (v) => /.+@.+/.test(v) || "유효하지 않은 이메일 형식입니다",
      ],
      phoneNumberRules: [
        (v) => !!v || "휴대전화번호 10자리를 입력하세요 (하이픈 생략 가능)",
        (v) => /^\d{3}-\d{4}-\d{4}$/.test(v) || "유효하지 않은 휴대전화번호 형식입니다",
      ],
    };
  },

  computed: {
    formattedPhoneNumber: {
      get() {
        return this.formData.phoneNumber;
      },
      set(value) {
        const formatted = value
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
          .replace(/-$/, "");
        this.formData.phoneNumber = formatted;
      },
    },
  },

  methods: {
    updatePhoneNumber(event) {
      event.target.value = this.formattedPhoneNumber;
    },


};
</script>
