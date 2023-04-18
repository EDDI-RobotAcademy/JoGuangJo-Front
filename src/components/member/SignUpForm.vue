<template>
  <div class="white" style="font-family: Arial">
    <v-row justify="center">
      <v-col cols="auto" style="padding-bottom: 90px">
        <router-link to="/">
          <v-img
              :src="require('@/assets/logo/logo.png')" width="400" class="mx-auto mb-6"/>
        </router-link>
        <v-card width="460" class="card">
          <v-card-text class="text-center px-12 py-16">
            <v-form @submit.prevent="onSubmit" ref="form">
              <div class="text-h4 font-weight-black mb-10">회원 가입</div>

              <div class="d-flex">
                <v-text-field v-model="email" label="이메일" @change="emailValidation"
                              :rules="email_rule" :disabled="false" required/>
                <v-btn text large outlined style="font-size: 13px"
                       class="mt-3 ml-5" color="teal lighten-1"
                       @click="checkEmail">
                  이메일 <br/>중복 확인
                </v-btn>
              </div>

              <div class="d-flex">
                <v-text-field v-model="password" label="비밀번호" type="password"
                              :rules="password_rule" :disabled="false" :counter="30" required @input="updatePasswordLength"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="password_confirm" label="비밀번호 확인" type="password"
                              :rules="password_confirm_rule" :disabled="false" :counter="30" required/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="nickName" label="닉네임" :disabled="nickNamePass" required  color="black"/>

                <v-btn text large outlined style="font-size: 13px; height: 55px"
                                class="mt-0 ml-5 mr-0"
                                @click="checkNickName"
                                :disabled="nickNamePass"
              >닉네임 중복 확인
                  </v-btn>
              </div><br><br>

              <v-textarea
               ref="termsTextarea"
               @scroll="onTermsScroll"
               label="이용약관"
               value="북유럽 기부 웹사이트의 개인정보 처리방침
소개
이 개인정보 처리방침은 북유럽 웹사이트가 사용자의 개인정보를 수집, 이용, 보호하는 방식을 설명합니다. 본 웹사이트를 이용함으로써 사용자는 이 처리방침의 약관에 동의하는 것으로 간주됩니다.

개인정보 수집
이 웹사이트에서 기부를 하실 때 사용자의 이름, 이메일 주소, 결제 방법, 기부액 등의 개인정보를 수집합니다.

개인정보 공유
결제 처리를 위해서 이 웹사이트는 제3자 결제 처리 업체를 사용합니다. 단, 이외에는 사용자의 개인정보를 외부 업체와 공유하지 않습니다.

위치
북유럽 웹사이트는 한국에 위치하고 있으며, 사용자의 개인정보는 한국 또는 다른 국가의 서버에서 저장 및 처리될 수 있습니다.

어린이
이 웹사이트는 어린이가 접속할 수 있지만, 만 13세 미만 어린이로부터 개인정보를 직접 수집하지 않습니다. 만 13세 미만 어린이의 경우, 개인정보를 제공하지 않도록 해 주세요.

보안
사용자의 개인정보를 무단으로 접근, 사용, 또는 공개되지 않도록 보호하기 위한 합리적인 조치를 취합니다. 사용자의 정보 보호를 위해 산업 표준 보안 프로토콜과 절차를 사용합니다.

사용자 권리
사용자는 자신의 개인정보에 대한 열람, 정정, 삭제, 또는 처리에 대한 이의제기 권리를 가지고 있습니다. 이러한 권리를 행사하고자 하는 경우, 아래에 제공된 연락처를 사용하여 저희와 연락해 주세요.

연락처
이 개인정보 처리방침에 대한 질문이나 문의사항이 있으시면, 웹사이트에서 제공되는 이메일 주소로 연락해 주세요"
               readonly
               outlined
               height="100"
               class="mt-4"
              ></v-textarea>
              <v-checkbox
               v-model="termsAccepted"
               label="이용약관에 동의합니다."
               color="black"
               class="mt-4"
               :disabled="!enableCheckbox"
              ></v-checkbox>

              <v-btn
               type="submit"
               block
               x-large
               rounded
               class="mt-6"
               color="#fee789"
               :disabled="!termsAccepted || (emailPass && nickNamePass) == false"
              >
              가입하기
              </v-btn>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignUpForm",
  data () {
    return {
      email: "",
      password: "",
      city: "",
      street: "",
      addressDetail: "",
      zipcode: "",
      password_length: 0,
      password_confirm: "",
      nickName: "",
      enableCheckbox: false,

      emailPass: false,

      nickNamePass:false,//닉네임중복체크후 사용가능한 닉네임인지여부
      termsAccepted: false,//이용약관

      email_rule: [
        v => !!v || '이메일을 입력해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
          return pattern.test(replaceV) || '이메일 형식을 입력하세요.'
        }
      ],
      password_rule: [
          (v) => !!v || "패스워드는 필수 입력사항입니다.",
          (v) => !(v && v.length >= 30) || "패스워드는 30자 이상 입력할 수 없습니다.",
          (v) => !(v && v.length < 8) || "패스워드는 8자 이상 입력해야합니다.",
        ],
      password_confirm_rule: [
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
        v => !(v && v.length < 8) || "패스워드는 8자 이상 입력해야합니다.",
        v => v === this.password || '패스워드가 일치하지 않습니다.'
      ],
    }
  },
  methods: {
    ...mapActions("account", ["checkDuplicateEmail", "checkDuplicateNickName"]),
    onTermsScroll() {
      const textarea = this.$refs.termsTextarea.$el;
      const scrollHeight = textarea.scrollHeight;
      const scrollTop = textarea.scrollTop;
      const clientHeight = textarea.clientHeight;

      if (scrollHeight - scrollTop <= clientHeight + 1) {
        this.enableCheckbox = true;
      } else {
        this.enableCheckbox = false;
      }
    },
    created() {
      console.log(this.$store)
    },
    mounted() {
      console.log(this.$store)
    },
    onSubmit() {
        if (this.password.length < 8) {
          alert("패스워드는 8자 이상 입력해야합니다.");
        } else {
          const { email, password, nickName, city, street, addressDetail, zipcode } = this;
          console.log("Emitting submit event:", { email, password, nickName, city, street, addressDetail, zipcode });
          this.$emit("submit", { email, password, nickName, city, street, addressDetail, zipcode });
        }
    },
    
    emailValidation () {
      const emailValid = this.email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      this.emailPass = false;
    },
    
    async checkEmail() {
      const isEmailAvailable = await this.checkDuplicateEmail(this.email);
      if (isEmailAvailable) {
        alert("사용 가능한 이메일입니다!");
        this.emailPass = true;
      } else {
        alert("중복된 이메일입니다!");
        this.emailPass = false;
      }
    },

    async checkNickName() {
      const isNickNameAvailable = await this.checkDuplicateNickName(this.nickName);
      if (isNickNameAvailable) {
        alert("사용 가능한 닉네임 입니다!");
        this.nickNamePass = true;
      } else {
        alert("중복된 닉네임 입니다!");
        this.nickNamePass = false;
      }
    },

    updatePasswordLength() {
        this.password_length = this.password.length;
      },
  }
}

</script>

<style scoped>
  .card {
    border: none !important;
    box-shadow: none !important;
  }
  

</style>