import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BackToTop from 'vue-backtotop'

Vue.use(VueResource);
Vue.use(BackToTop);

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        //binding = arguments passed
        // vnode = virtual node
        el.style.color = `#${Math.random().toString().slice(2,8)}`
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode) {
        if(binding.value === 'wide') {
            el.style.maxWidth = '100%';
        } else if(binding.value === 'narrow') {
            el.style.maxWidth = '50%';
        } 
        
        if(binding.arg === 'columns') {
            el.style.float = 'left';
            el.style.maxWidth = '30%';
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
