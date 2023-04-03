import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vuetify 추가
import vuetify from './plugins/vuetify'

// bootstrap 추가
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// normalice.css 추가
import 'normalize.css'

// font.css 추가
import '@/css/Font.css';

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')