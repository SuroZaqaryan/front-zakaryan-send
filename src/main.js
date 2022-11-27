import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import 'tw-elements';

import './assets/styles/tailwind.css';
import './assets/styles/inputs.css';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
