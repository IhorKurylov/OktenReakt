import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGEtCharacter, useToggle } from '../../hook/useGEtCharacters.js';
import { getMoreData, userActions } from '../../reduxCore/actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionTypes } from '../../reduxCore/reducers/usersReducer.js';
import store from '../../reduxCore/store.js';
import { useGetRIckMorty } from '../../hook/useGetRickMorty.js';
import { tokenInstance } from '../../services/rmApiServices.js';
import { Endpoints } from '../../api/endpoints.js';

const Lesson9 = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.results);
  const isLoading = useSelector((store) => store.users.isLoading);
  const nextUrl = useSelector((store) => store.users.info.next);
  const getMore = (number) => dispatch(getMoreData(number))


  useGetRIckMorty()

  const handleNext = () => {
    const pageNum = nextUrl.split('=')[1]
    getMore(pageNum)
  }

  return (
    <div>
      {isLoading
        ? <h1>Loading ....</h1>
        : <>
          <p>{nextUrl}</p>
          <p onClick={handleNext}>Get next</p>
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
