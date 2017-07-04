import createLogger from 'vuex/dist/logger';

const localStoragePlugin = store => {
  store.subscribe((mutation, { session }) => {
    if (session.access_token) {
      window.localStorage.setItem('access_token', session.access_token);
    } else {
      window.localStorage.removeItem('access_token');
    }
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]