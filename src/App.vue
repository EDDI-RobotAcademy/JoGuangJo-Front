<template>
  <v-app>
    <div class="header-form">
      <header-form/> <!-- HeaderForm 추가 -->
    </div>
    <navigation-form/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-form/>
  </v-app>
</template>

<script>
import HeaderForm from '@/components/layout/HeaderForm.vue'; // HeaderForm import
import NavigationForm from '@/components/layout/NavigationForm.vue';
import FooterForm from '@/components/layout/FooterForm.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    HeaderForm, // HeaderForm 컴포넌트 추가
    NavigationForm,
    FooterForm
  }
};
</script>

<style scoped>
.header-form {
  margin-top: 55px;
  margin-left: 25px;
  margin-bottom: -45px;
}

</style>
