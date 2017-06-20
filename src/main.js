import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BackToTop from 'vue-backtotop'

Vue.use(VueResource);
Vue.use(BackToTop);

new Vue({
  el: '#app',
  render: h => h(App)
})
