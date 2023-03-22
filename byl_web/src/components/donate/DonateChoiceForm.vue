<template>
  
    <v-container>
      <div>
          <h3>책 기부 페이지 입니다</h3>
          <h4>기부 방식을 선택해 주세요</h4>
      </div>
  
        <v-row justify="center">
          <div style="margin: 30px">
              <router-link :to="{name: 'DonateVisitPage'}" style="text-decoration: none">
                  <v-btn width="200" height="200"
                         class="mx-auto" id="donateVisitButton" color="white">
                    <h5 class="text-md-center">방문 수거 기부 신청하기</h5>
                  </v-btn>
              </router-link>
          </div>
          
          <div style="margin: 30px">
              <router-link :to="{name: 'DonateMailPage'}" style="text-decoration: none">
                  <v-btn width="200" height="200"
                         class="mx-auto" id="donateVisitButton" color="white">
                    <h5 class="text-md-center">택배 기부 신청하기</h5>
                  </v-btn>
              </router-link>
          </div>
  
          <div style="margin: 30px">
              <router-link :to="{name: 'DonateSearchPage'}" style="text-decoration: none">
                  <v-btn width="200" height="200"
                         class="mx-auto" id="donateVisitButton" color="white">
                    <h5 class="text-md-center">가까운 기부가능 기관 찾기</h5>
                  </v-btn>
              </router-link>
          </div>
        </v-row>   
    </v-container>
    
  </template>
  
  <script>
  export default {
    name : "DonateChoiceForm"
  
  }
  </script>
  
  <style>
  
  </style>