<template>
  <v-app>
    <navigation-form/>
      <v-main>
        <router-view/>
      </v-main>
    <footer-form/>
  </v-app>
</template>


<script>

import NavigationForm from '@/components/layout/NavigationForm.vue';
import FooterForm from '@/components/layout/FooterForm.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavigationForm,
    FooterForm
  }



};
</script>

