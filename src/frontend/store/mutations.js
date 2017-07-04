import * as types from './mutation-types';

export default {
   [types.SET_USER] (state, user) {
     state.session.user = user;
  },

  [types.SET_ACCESS_TOKEN] (state, token) {
    state.session.access_token = token;
  },

  [types.REMOVE_ACCESS_TOKEN] (state) {
    state.session.access_token = false;
  },

  [types.REMOVE_USER] (state) {
    state.session.user = {};
  },

  [types.AUTHENTICATED] (state) {
    state.session.authenticated();
  },

  [types.INIT_SESSION] (state) {
    let authenticated;
    const authPromise = new Promise((resolve, reject) => {
      authenticated = resolve;
    });

    state.session.ready = authPromise;
    state.session.authenticated = authenticated;
  }
}