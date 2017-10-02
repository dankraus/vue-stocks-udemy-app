import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router'
import store from './store/store.js';

Vue.filter('currency', value => {
  return `$${value.toLocaleString()}`;
});

Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = 'https://api.example.com';

// Vue.axios.get('/user/12345')
// .then(function(response) {
//   console.log(response.data);
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.headers);
//   console.log(response.config);
// });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
