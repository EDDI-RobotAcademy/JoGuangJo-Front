<template>
  <v-container>

    <!-- 일단은 구현한 도메인들을 웹브라우저로 확인해보기 위해 nav 태그 안에 링크를 넣었습니다.
      추후 메인페이지 UI가 얼추 완성되면 삭제할 예정이니 아직은 건드리지 마세요. -->
    <nav>
      <router-link to="/donate-choice">책 기부하기</router-link>  |
      <router-link to="/qnaBoard-list">질문 게시판</router-link>  |
      <router-link to="/reviewBoard-list">독후감상문 게시판</router-link>  |
      <router-link to="/sign-up">회원가입 페이지</router-link>  |
      <router-link to="/sign-in">로그인 페이지</router-link>  |
      <router-link to="/find-password">회원 비밀번호 찾기 페이지</router-link>  |
    </nav>
  </v-container>
</template>

<script>

  export default {
    name: 'HomeView',

    components: {
    },
  }
</script>
