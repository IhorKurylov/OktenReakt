import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar.js';
import LoginPageUseFormJoi from '../pages/LoginPageUseFormJoi/LoginPageUseFormJoi.js';
import { useOutletContext } from 'react-router-dom';
import { AppRoutes } from './AppRoutes.js';
import { PrivateRoute, PublicRoute } from '../HOC/RoutesManagment.js';
import Lesson7 from '../components/lesson7Components/Lesson7.js';
import Lesson8 from '../components/lesson8Components/Lesso8.tsx';
import Lesson8Nested from '../components/lesson8Components/Lesso8Nested.js';
import { useEffect, useState } from 'react';
import { useGEtCharacter } from '../hook/useGEtCharacters.js';
import Lesson9 from '../components/lesson9/Lesso9.js';
import UsersTS from '../components/lesson11/UsersTS.tsx';



const AppLayout =()=>(
  <div  style={{height: '100vh'}}>
    <Navbar />
    <div style={{width: "100%", display: 'flex'}}>
      <div style={{width: "20%", backgroundColor: 'aqua', height: '100vh' }}>Aside</div>
      <Outlet />
    </div>

  </div>
);

const Users = ()=>{
  const info = 'info'
  const navigate = useNavigate();

  const [users, setUsers] = useState([])

  useGEtCharacter(setUsers)
  return(
    <div >
      {users.map((user) => (
        <div>
          <p>{user.name}</p>
          <p>{user.status}</p>
          <img src={user.image} alt="" style={{width: 100, height: 100}}/>
        </div>
      ))}

      <Outlet context={info} />
    </div>
  )
}

const UsersInfo = ()=>{
  const info =  useOutletContext();
  console.log(info);
  const path = useLocation();

  console.log(path);
  return (
    <div >
      <h1>Users Info</h1>
    </div>
  )
}

const UserID = ()=>{
  const {userId} = useParams()
  console.log(userId);

  return (
    <div >
      <h1>UserID</h1>
    </div>
  )
}



export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>OOOOOpppsie</h1>,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <div>Hello world!</div>,
      },
      {
        path: AppRoutes.LESSON8,
        element: <Lesson8/>,
        children:[
          {
            path: AppRoutes.Lesson8Nested,
            element:  <Lesson8Nested />,
          },
        ]
      },
      {
        path: AppRoutes.LESSON7,
        element: <Lesson7/>,
      },
      {
        path: AppRoutes.LESSON9,
        element: <Lesson9/>,
      },
      {
        path: AppRoutes.LOGIN,
        element: <PrivateRoute Component={LoginPageUseFormJoi} />,
      },
      {
        path: "/lesson11",
        element: <UsersTS />,
      },
      {
        path: AppRoutes.USERS,
        // element: <Users/>,
        element: <PublicRoute Component={Users}/>,
        children: [
          {
            path: AppRoutes.USERID,
            element:  <UserID/>,
          },
          {
            path: AppRoutes.USERS_INFO,
            element:  <UsersInfo />,
          },
        ]
      },
    ]
  }
]);
