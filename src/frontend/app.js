'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import routes from './routes';
import App from './components/App.vue';
import store from './store';
import {init as initAuth} from './auth';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes,
  base: __dirname
});

store.dispatch('initApp').then(() => {
  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });

  initAuth(store);
}, (err) => {
  console.log('Error wile initializing', err);
  // TODO: Warn user but should not occur...
});
