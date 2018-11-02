import Vue from 'vue'
import App from '@/components/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/plugins/i18n'

import '@/plugins'
import '@/components'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  ...App
}).$mount('#app')
