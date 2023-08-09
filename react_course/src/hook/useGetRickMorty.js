import { useEffect } from 'react';
import { getRickMorty, userActions } from '../reduxCore/actions/userActions.js';
import { useDispatch } from 'react-redux';

export function useGetRIckMorty(){
  const dispatch = useDispatch();

  const getCharacters = () => dispatch(getRickMorty())

  useEffect(() => {
    // dispatch(getRickMorty())
    getCharacters()
  }, []);
}

