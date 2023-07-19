import loginPageUseForm from '../pages/LoginPageUseForm/LoginPageUseForm.js';
import axios from 'axios';
import { AppRoutes } from '../Routing/AppRoutes.js';

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
  handleLoginAxios:  (user, navigate) => {
    instance.post(Endpoints.LOGIN, user)
    // fetch('http://localhost:8000/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('authUser', JSON.stringify(user))
        navigate(AppRoutes.USERS)
      })
  }
}
