<template>
  <v-app>
    <navigation-form/>
    <header-form/>
      <v-main>
        <router-view/>
      </v-main>
    <footer-form/>
  </v-app>
</template>


<script>

import NavigationForm from '@/components/layout/NavigationForm.vue';
import HeaderForm from '@/components/layout/HeaderForm.vue'
import FooterForm from '@/components/layout/FooterForm.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavigationForm,
    HeaderForm,
    FooterForm
  }



};
</script>

