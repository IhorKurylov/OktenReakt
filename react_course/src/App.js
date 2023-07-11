import logo from './logo.svg';
import './App.css';

import { UserContainer } from './components/UserContainer/UserContainer.js';
import { createContext, useEffect, useState } from 'react';


export const UsersContext = createContext(null);


const App = () => {
  const [ users, setUsers ] = useState(null);
  const [ smth, setSmth ] = useState('advcava');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setSmth('Ihor');
      })
      .catch((errors) => console.log(errors.response))
      .finally(() => {
        console.log('Promise finished');
      });
  }, []);


  const handleDelete = (id) => {
    setUsers([ ...users ].filter((user) => user.id !== id));
  };

  const handleClick = (value) => {
    alert(`User id is ${value}`);
    // alert(`User id is`)
  };


  const contextValue = {users, smth, handleClick, handleDelete}

  return (
    <UsersContext.Provider value={contextValue}>
      <div style={{display: 'flex'}}>
        <UserContainer/>
        <UserContainer/>
      </div>
    </UsersContext.Provider>
  );
};

export default App;
