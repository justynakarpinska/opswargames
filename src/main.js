import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  mounted () {
    this.$store.dispatch('refreshGames')
    //this.$store.dispatch('change')
  },
  render: h => h(App)
}).$mount('#app')
