import { useEffect, useState } from "react";
import { User } from "../../common/types/UserTypes";




const UsersTS = () => {
  const [users, setUsers] = useState<User[] | null>(null)
  const a = {
    name: 'Ihor',
    age: 123,
    role: null
  }
  const b = {
    name1: 'Ihor',
    age1: 123,
    role1: null
  }

  type A  = typeof a
  type B  = typeof b

  const d: A | B  = {
    name: 'dgsg',
    age: 123,
    role: null,
  }

  const c: A | B  = {
    name1: 'dgsg',
    age1: 123,
    role1: null,
  }


  enum Fruits {
    Apple= 4 , // 0
    Pear, // 1
    Banana=234234, // 2
  }

  console.log(Fruits.Banana)

const getUsers: (a: string) => Promise<User[]> = (url) =>{
 return  fetch(url)
    .then(res => res.json())
}

  useEffect(() => {
    getUsers('https://jsonplaceholder.typicode.com/users').then(data => setUsers(data))
  }, [])

  return (
    <div>
      {users?.map((user, id) => (<div key={id}>
        <h4>{user.name}
          {"name" in user && <h3>Mentor go to sleep</h3>}
        </h4>
      </div>))}

    </div>
  )

}

export default UsersTS
