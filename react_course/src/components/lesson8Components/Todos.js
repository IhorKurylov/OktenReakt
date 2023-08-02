import {memo} from 'react';

const Todos = ({todos, addTodo}) => {
  console.log("child Render");
  return (
    <>
      {todos.map((todo, idx) => <p key={idx}>{todo}</p>)}
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}
export default memo(Todos)
