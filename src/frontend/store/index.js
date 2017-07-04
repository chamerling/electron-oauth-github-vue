import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as types from './mutation-types';
import plugins from './plugins';
import mutations from './mutations';

const state = {
  server: {
    url: 'http://api.github.com'
  },
  session: {
    access_token: window.localStorage.getItem('access_token'),
    ready: false,
    authenticated: false,
    user: {}
  }
};

mutations[types.INIT_SESSION](state);

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
})