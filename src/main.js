import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BackToTop from 'vue-backtotop'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BackToTop);

const router = new VueRouter({
    routes: Routes,
    mode: 'history' // 'hash' is the default. And in order to avoid the # in the url in production you should setup the server in a way to redirect all the requests to the index.html
});

// Custom global directives

// Registered locally in indexPost.vue
//Vue.directive('rainbow', {
//    bind(el, binding, vnode) {
//        //binding = arguments passed
//        // vnode = virtual node
//        el.style.color = `#${Math.random().toString().slice(2,8)}`
//    }
//});

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
});

// Custom global filters

// Registered locally in indexPost.vue
//Vue.filter('to-uppercase', (value) => {
    // value = the value passed to the filter
    //return value.toUpperCase();
//});

Vue.filter('snippet', (value) => {
    return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
