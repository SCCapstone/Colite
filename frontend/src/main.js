import Vue from 'vue';
import App from './App.vue';
//import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker';
import router from './router';
import store from './store';
import Navbar from './components/Navbar.vue';
import axios from 'axios';

Vue.prototype.$http = axios;

// line below is not working
Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')