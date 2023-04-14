<template>
    <b-container class="py-5">
      <b-row class="justify-content-center text-center mb-5">
        <b-col md="8">
          <h2>원하는 기부 방식을 선택하세요</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-card
            title="방문 수거"
            header-tag="header"
            header-class="bg-warning text-white"
            class="mb-4"
          >
            <div class="display-4"></div>
            <p>재단 직원이 직접 회원님의 집으로 방문해 책을 수거합니다.</p>
            <router-link to="/donate-visit-register">
              <b-button variant="warning" block>지금 방문 수거 신청하기</b-button>
            </router-link>
          </b-card>
        </b-col>
  
        <b-col md="4">
          <b-card
            title="택배 기부"
            header-tag="header"
            header-class="bg-warning text-white"
            class="mb-4"
          >
            <div class="display-4"></div>
            <p>회원님이 우체국 택배를 통해 책을 재단으로 전달합니다.</p>
            <router-link to="/donate-mail">
              <b-button variant="warning" block>지금 택배 기부 신청하기</b-button>
            </router-link>
          </b-card>
        </b-col>
  
        <b-col md="4">
          <b-card
            title="가까운 기부 가능 기관 찾기"
            header-tag="header"
            header-class="bg-warning text-white"
            class="mb-4"
          >
            <div class="display-4"></div>
            <p>회원님의 위치 근처에 있는 기부 가능 기관을 검색합니다.</p>
            <router-link to="/donate-search">
              <b-button variant="warning" block>지금 가까운 기부 가능 기관 찾기</b-button>
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'DonateChoiceForm'
  };
  </script>