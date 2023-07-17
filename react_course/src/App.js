import './App.css';
import { createContext, useEffect, useState } from 'react';
import LoginPageUseFormJoi from './pages/LoginPageUseFormJoi/LoginPageUseFormJoi.js';


export const UsersContext = createContext(null);


const App = () => {

  return (
    <LoginPageUseFormJoi />
  );
};

export default App;
