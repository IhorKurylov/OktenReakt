import loginPageUseForm from '../pages/LoginPageUseForm/LoginPageUseForm.js';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

const Endpoints = {
  LOGIN: '/api/login'
}

export const apiService = {
  handleLogin:  (data) => {
  fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(data => console.log(data))
  },
  handleLoginAxios:  (data) => {
    instance.post(Endpoints.LOGIN, data)
    // fetch('http://localhost:8000/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
      .then(data => console.log(data))
  }
}
