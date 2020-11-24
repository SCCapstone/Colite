import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker';
import router from './router';
import store from './store';
import Navbar from './components/Navbar.vue';
import axios from 'axios';

Vue.config.productionTip = false

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

import * as VueGoogleMaps from "vue2-google-maps";

    Vue.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyD3lI3tWTw58b9iKKYgoX-qZpwZndHwsDc",
        },
    });

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

// This imports directive v-b-scrollspy as a plugin:
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

// This imports the dropdown and table plugins
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(BootstrapVue)


Vue.prototype.$http = axios;

// line below is not working
Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
