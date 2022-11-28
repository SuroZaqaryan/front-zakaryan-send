import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import './assets/styles/tailwind.css';
import './assets/styles/inputs.css';

import Notifications from "vue-notification";
Vue.use(Notifications);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
