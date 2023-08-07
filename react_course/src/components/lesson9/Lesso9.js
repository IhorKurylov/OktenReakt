import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGEtCharacter, useToggle } from '../../hook/useGEtCharacters.js';
import { userActions } from '../../reduxCore/actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionTypes } from '../../reduxCore/reducers/usersReducer.js';
import store from '../../reduxCore/store.js';

const Lesson9 = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.results);
  const isLoading = useSelector((store) => store.users.isLoading);
  const info = useSelector((store) => store.users.info.next);

  console.log('users', users);

  useEffect(() => {
    dispatch(userActions.setIsLoading(true));

    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then(data => dispatch(userActions.setUsers(data)))
    // .catch(e => d)
    // .then(data => dispatch({type: UserActionTypes.SET_USERS, payload:data}))
  }, []);

  const getMore = () => {
    dispatch(userActions.setIsLoading(true));
    fetch(info)
      .then(resp => resp.json())
      .then(data => dispatch(userActions.addUsers(data)))
  }


  return (
    <div>
      {isLoading
        ? <h1>Loading ....</h1>
        : <>
          <p>{info}</p>
          <p onClick={getMore}>Get next</p>
          {users.map((user) => (
            <div>
              <p>{user.name}</p>
              <img src={user.image} alt="" style={{width: 100, height: 100}}/>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default Lesson9;
