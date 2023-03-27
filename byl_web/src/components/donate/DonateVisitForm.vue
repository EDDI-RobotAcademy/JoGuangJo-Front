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
                :close-on-content-click="false"
                :return-value.sync="visitDate"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.visitDate"
                    label="방문 날짜 (당일 선택 불가)"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.visitDate"
                  label="방문 날짜"
                  :min="minDate"
                  :allowed-dates="allowedDates"
                  scrollable
                  required
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="visitDateMenu = false"
                  >
                    취소
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.visitDateMenu.save(formData.visitDate)"
                  >
                    확인
                  </v-btn>
                </v-date-picker>
              </v-menu>

              <v-menu
                ref="visitTimeMenu"
                v-model="visitTimeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="visitTime"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="visitTime"
                    label="방문 시간 (오전10시 ~ 오후8시 사이만, 30분 단위로 선택 가능)"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  label="방문 시간"
                  v-model="formData.visitTime"
                  format="ampm"
                  :ampm="true"
                  :step="60"
                  :allowed-hours="[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]"
                  :allowed-minutes="[0, 30]"
                  required
                  >
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    color="primary"
                    @click="visitTimeMenu = false"
                  >
                    취소
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.visitTimeMenu.save(formData.visitTime)"
                  >
                    확인
                  </v-btn>
                </v-time-picker>
              </v-menu>

            <div class="d-flex">
              <v-text-field v-model="formData.zipcode" label="우편번호" readonly required />
              <v-btn text large outlined style="font-size: 13px" class="mt-3 ml-5" color="blue lighten-1" @click="callDaumAddressApi">
                내 주소 찾기
              </v-btn>
            </div>

            <div>
              <v-text-field v-model="formData.city" label="도시" readonly required />
            </div>

            <div>
              <v-text-field v-model="formData.street" label="기본 주소" readonly required />
            </div>

            <div>
              <v-text-field v-model="formData.addressDetail" label="상세 주소 및 기타 메모(공동현관 비밀번호 등)" required />
            </div>
            
            <v-btn color="primary" :disabled="!valid" type="submit">방문 수거 신청하기</v-btn>

          </v-col>
        </v-row>
      </v-form>
    </div>
      
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
        visitDate: null,
        visitTime: null,
        zipcode: "",
        city: "",
        street: "",
        addressDetail: "",
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
      minDate: this.calculateMinDate(),
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
    calculateMinDate() {
      const today = new Date();
      today.setDate(today.getDate() + 1);
      return today.toISOString().substr(0, 10);
    },
    allowedDates(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(date);
      return selectedDate > today;
    },
    checkFormValidity() {
      this.validForm = this.formData.street !== "" && this.formData.addressDetail !== "";
    },

    callDaumAddressApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = "";

          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }

          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }

          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }

          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }

          this.formData.city = data.sido;
          this.formData.zipcode = data.zonecode;
          this.formData.street = data.sigungu + " " + fullRoadAddr;
        },
      }).open();
    },

    submit() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", this.formData);
      }
    },
  },
};
</script>
