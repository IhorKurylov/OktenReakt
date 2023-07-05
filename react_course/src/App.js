import logo from './logo.svg';
import './App.css';

import { UserContainer } from './components/UserContainer/UserContainer.js';
import { useState } from 'react';

const App = () => {

  console.log('App render');
  // setTimeout(() => setShow(false), 5000);

  return (
    <>
      {/*<p>{show ? "Show" : "Hidden"}</p>*/}
      <UserContainer/>


    </>
  );
};

export default App;
