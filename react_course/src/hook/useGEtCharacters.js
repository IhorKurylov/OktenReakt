import { useEffect, useState } from 'react';


export function useGEtCharacter(setUsers, number=0,  url){
  const [value, setValue] = useState(0)


  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then(data => {
        setUsers(data.results)
        setValue(data.results.length)
      })
  },[])

  const sum = 5 + number + value

  return sum

}


export function useToggle(value){

  return !value
}
