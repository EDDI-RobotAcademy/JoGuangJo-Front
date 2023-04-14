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
                       @click="checkDuplicateEmail">
                  이메일 <br/>중복 확인
                </v-btn>
              </div>

              <div class="d-flex">
                <v-text-field v-model="password" label="비밀번호" type="password"
                              :rules="password_rule" :disabled="false" required @input="updatePasswordLength"/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="password_confirm" label="비밀번호 확인" type="password"
                              :rules="password_confirm_rule" :disabled="false" required/>
              </div>

              <div class="d-flex">
                <v-text-field v-model="nickName" label="닉네임" :disabled="nickNamePass" required  color="black"/>

                <v-btn text large outlined style="font-size: 13px; height: 55px"
                                class="mt-0 ml-5 mr-0"
                                @click="checkDuplicateNickName"
                                :disabled="nickNamePass"
              >닉네임 중복 확인
                  </v-btn>
              </div><br><br>

              <v-textarea
               label="이용약관"
               value="이용약관 내용을 여기에 삽입하세요."
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
import axios from "axios";

export default {
  name: "SignUpForm",
  data () {
    return {
      email: "",
      password: "",
      password_length: 0,
      password_confirm: "",
      nickName: "",

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
          (v) => !(v && v.length < 8) || "패스워드는 8자 이상 입력해야합니다. 현재 길이 : " + v.length,
        ],
      password_confirm_rule: [
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
        v => v === this.password || '패스워드가 일치하지 않습니다.'
      ],
    }
  },
  methods: {
    onSubmit() {
        if (this.password.length < 8) {
          alert("패스워드는 8자 이상 입력해야합니다.");
        } else {
          const { email, password } = this;
          this.$emit("submit", { email, password });
        }
    },
    
    emailValidation () {
      const emailValid = this.email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      this.emailPass = false;
    },
    
    checkDuplicateEmail () {
      const emailValid = this.email.match(
          /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      this.emailPass = false

      if (emailValid) {
        const {email} = this
        axios.post(`http://localhost:7777/member/check-email/${email}`)
            .then((res) => {
              if (res.data) {
                alert("사용 가능한 이메일입니다!")
                this.emailPass = true
              } else {
                alert("중복된 이메일입니다!")
                this.emailPass = false
              }
            })
      }
    },
    
    checkDuplicateNickName() {
        const { nickName } = this;
        axios
          .post(`http://localhost:7777/member/check-nickName/${nickName}`)
          .then((res) => {
            if (res.data) {
              alert("사용 가능한 닉네임 입니다!");
              this.nickNamePass = true;
            } else {
              alert("중복된 닉네임 입니다!");
              this.nickNamePass = false;
            }
          });
      
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