import { useCallback, useEffect, useMemo, useState } from 'react';

import { Outlet } from "react-router-dom";
import Todos from "./Todos";

type User = {
  name: string;
  id: string;
  role?: string;
}

export const user = {
  nickname: "qweqwr"
}


type DType = "1" | "2" | "3"

enum Medias {
  yt= 'Youtube',
  fb = "Facebook",
  wu = "whatsup",
  twitter = 5,
  smth
}

const Lesson8 = () => {
  const [ count, setCount ] = useState<number>(0);
  const [ todos, setTodos ] = useState<string[]>(["1","2","3"]);

  const user: User = {
    name: "Ihor",
    id: 'string'
  }

  const usersArray: User[] = [user, { name: "Ihor",
    id: 'string', role: '123'}]


  const getSum:(neA: string, neB: string) => string = (a, b) => {
    return a+b
  }


  const d: DType = '2'



  console.log(Medias.fb)


  const expensiveCalculation = (number: number) => {
    console.log('Calculating .....');
    for(let i=0; i < 1000000000; i++){
      number += 1;
    }
    return number
  }

  const calculation = useMemo(()=>expensiveCalculation(count),[count])

  const changeCount = (type: string) => {
    setCount(type==='decrement' ? count - 1 : count + 1)
  };

  const addTodo = useCallback(()=>setTodos([...todos, "New Todo"]),[todos])

  return (
    <div>
      <button onClick={()=>changeCount('increment')}>Plus</button>
      <button onClick={()=>changeCount('decrement')}>Minus</button>
      <p>Count: {count}</p>
      <p>Calculation: {calculation}</p>
      <br/>
      <hr/>
      <br/>
      <Todos
        todos={todos}
        addTodo={addTodo}
      />
      <Outlet />
    </div>
  );
};

export default Lesson8;
