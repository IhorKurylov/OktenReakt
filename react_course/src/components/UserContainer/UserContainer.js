import UserComponent from './UserComponent/UserComponent.jsx';
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';

export const UserContainer = () => {
  const [ users, setUsers ] = useState(null);
  const [ errors, setErrors ] = useState();
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
        console.log('Promise finished')
      });

  },[]);


  const handleDelete = (id) => {
    setUsers([ ...users ].filter((user) => user.id !== id));
  };

  const handleClick = (value) => {
    alert(`User id is ${value}`);
    // alert(`User id is`)
  };

  console.log('render');

  return (
    <>
      {smth && <p>{smth}</p>}
      <h1>Hello</h1>
      {smth && <p>{smth}</p>}
      {smth && <p>{smth}</p>}

      {users?.map((user, id) => {
        user.phone = '+' + user.phone;
        return (
          <UserComponent
            key={id}
            user={user}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />);
      })}
    </>);
};

