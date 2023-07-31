import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar.js';
import LoginPageUseFormJoi from '../pages/LoginPageUseFormJoi/LoginPageUseFormJoi.js';
import { useOutletContext } from 'react-router-dom';
import { AppRoutes } from './AppRoutes.js';
import { PrivateRoute, PublicRoute } from '../HOC/RoutesManagment.js';
import Lesson7 from '../components/lesson7Components/Lesson7.js';

const AppLayout =()=>(
  <div  style={{height: '100vh', overflow: 'hidden'}}>
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
  // setTimeout(()=>{
  //   navigate(AppRoutes.LOGIN)
  // },3000)
  return(
    <div >
      <h1>Users</h1>
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
        path: AppRoutes.LESSON7,
        element: <Lesson7/>,
      },
      {
        path: AppRoutes.LOGIN,
        element: <PrivateRoute Component={LoginPageUseFormJoi} />,
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
