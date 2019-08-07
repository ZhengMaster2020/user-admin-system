import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(ElementUI)

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
