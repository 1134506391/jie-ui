import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import { button, icon, } from '../package/index'

Vue.use(button)
  .use(icon)

  Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
