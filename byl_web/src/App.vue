<template>

  <v-app>
    <navigation-menu-page/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>

</template>


<script>

import Footer from './views/layout/Footer.vue';
import NavigationMenuPage from './views/layout/navigation/NavigationMenuPage.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavigationMenuPage,
    Footer,
  }



};
</script>

