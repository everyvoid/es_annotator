import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import { store } from './store.js';

Vue.use(ElementUI, { locale })
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes
});
/*
const $ = require('jquery')
window.$ = $
require('jquery-confirm')
*/
new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App)
});

