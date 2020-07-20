import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import '@/plugins/gtag'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/sass/main.scss'
import '@/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
