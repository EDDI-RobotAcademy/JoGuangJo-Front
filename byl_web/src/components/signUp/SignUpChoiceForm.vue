<template>
    <v-container>
      <div class="white">
          <h5 class="text-md-center" style="font-weight: normal">
            회원 타입을 선택해주세요.</h5>
              <router-link :to="{name: 'EnterpriseSignUpView'}"> 
                    <br/> 기업 회원가입
              </router-link>
            </div>
            <div>
              <router-link :to="{name: 'CommonSignUpView'}">
                  <br/> 일반회원 회원가입
              </router-link>
            </div>
          <div id="signUpButton" class="text-md-center">
           <h5>이미 가입한 계정이 있으신가요?</h5>
           <router-link to="/sign-in-view">
              로그인 화면으로 이동하기
            </router-link>
          </div>
    </v-container>
</template>
  
<script>
  export default {
    name: "SignUpChoiceForm"
  }
</script>
  
<style scoped>
  
</style> 