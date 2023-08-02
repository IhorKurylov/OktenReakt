import { useCallback, useEffect, useMemo, useState } from 'react';
import Todos from './Todos.js';
import { Outlet } from "react-router-dom";

const Lesson8 = () => {
  const [ count, setCount ] = useState(0);
  const [ todos, setTodos ] = useState([1,2,3]);

  const expensiveCalculation = (number) => {
    console.log('Calculating .....');
    for(let i=0; i < 1000000000; i++){
      number += 1;
    }
    return number
  }

  const calculation = useMemo(()=>expensiveCalculation(count),[count])

  const changeCount = (type) => {
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
