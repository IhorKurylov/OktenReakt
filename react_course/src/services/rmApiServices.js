import axios from 'axios';
import { userActions } from '../reduxCore/actions/userActions.js';
const { REACT_APP_BASEURL } = process.env
const instance = axios.create({
  baseURL: REACT_APP_BASEURL
});

export const tokenInstance = (token) => axios.create({
  baseURL: REACT_APP_BASEURL,
  headers:{
    Authorization: `Bearer ${token}`
  }
});


export const rmApiServices = {
  getCharactersData: (dispatch) => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => dispatch(userActions.setUsers(res.data)));
  },
  getCharactersData2: () => {
    return axios.get('https://rickandmortyapi.com/api/character');
  },

  post: (url) => {
    return instance.post(url);
  },

  get: (url) => {
    return instance.get(url);
  },

  patch: (url) => {
    return instance.patch(url);
  },

  put: (url) => {
    return instance.put(url);
  },

  delete: (url) => {
    return instance.delete(url);
  },

};
