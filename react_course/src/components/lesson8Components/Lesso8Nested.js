import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGEtCharacter, useToggle } from '../../hook/useGEtCharacters.js';

const Lesson8Nested = () => {

  const [users, setUsers] = useState([])
  const sum = useGEtCharacter(setUsers, 5)
  // useEffect(()=>{
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then(resp => resp.json())
  //     .then(data => setUsers(data.results))
  // },[])
  const toggle = useToggle(true)

  console.log(sum);
  return (
  <div>
    {users.map((user) => (
      <div>
        <p>{user.name}</p>
        <img src={user.image} alt="" style={{width: 100, height: 100}}/>
      </div>
    ))}

  </div>
  );
};

export default Lesson8Nested;
