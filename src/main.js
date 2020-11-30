import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss';

// global components
import GlobalComponents from './globalComponents'
Vue.use(GlobalComponents);

router.afterEach(() => {
   const contentWrapper = document.querySelector(".v-content__wrap");
   if(contentWrapper !== null){
		contentWrapper.scrollTop = 0;
		window.scroll(0,0);
   }
})

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { ValidationObserver, ValidationProvider, extend, localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("en", en);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);


Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
   load: {
      key: '',
      libraries: ['places'],
   },
})
new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
