import UserComponent from './UserComponent/UserComponent.jsx';
import { useContext, createContext } from 'react';
import { UsersContext } from '../../App.js';

export const HAHAContext = createContext(null);

export const UserContainer = () => {

  const {users, smth} = useContext(UsersContext);

  return (
    <HAHAContext.Provider value={'haha'}>
      <div>
        <h1>Hello</h1>
        {smth && <p>{smth}</p>}

        {users?.map((user, id) => {
          user.phone = '+' + user.phone;
          return (
            <UserComponent
              key={id}
              user={user}
            />);
        })}
      </div>
    </HAHAContext.Provider>);
};

