import * as types from './mutation-types'
import * as axios from 'axios';
import {ipcRenderer} from 'electron';

const getAxiosClient = (state) => {
  return axios.create({
    baseURL: state.server.url,
    headers: {'Authorization': 'token ' + state.session.access_token},
    responseType: 'json'
  });
}

export const getToken = ({commit}) => {
  ipcRenderer.send('github-oauth', 'getToken');
};

export const logout = ({commit}) => {
  return new Promise(resolve => {
    commit(types.REMOVE_ACCESS_TOKEN);
    commit(types.INIT_SESSION);
    commit(types.REMOVE_USER);
    resolve();
  });
};

export const getUser = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    getAxiosClient(state).get('/user').then(response => {
      commit(types.SET_USER, response.data);
      resolve(response.data);
    }, err => {
      console.log(err);
      reject(err);
    });
  });
};

export const initApp = ({commit, state}) => {
  return new Promise(resolve => {
    if (!state.session.access_token) {
      return resolve();
    }

    getUser({commit, state}).then(user => {
      commit(types.SET_USER, user);
      commit(types.AUTHENTICATED, user);
      resolve();
    }, err => {
      console.log('Error while getting user from github, user will have to login', err);
      resolve();
    });
  });
};
