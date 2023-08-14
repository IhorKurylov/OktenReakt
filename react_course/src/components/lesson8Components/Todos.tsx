import {memo} from 'react';
import { user } from "./Lesso8";

interface Props {
  todos: string []
  addTodo: () => void
}
type A = typeof user

const Todos = ({todos, addTodo}: Props) => {
  const newUser: A = {
    nickname: 'affwe'
  }
  return (
    <>
      {todos.map((todo, idx) => <p key={idx}>{todo}</p>)}
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}
export default memo(Todos)
