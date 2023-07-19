import { Navigate } from "react-router-dom";
import { AppRoutes } from '../Routing/AppRoutes.js';

export const PublicRoute = ({Component}) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  return !authUser?.email
    ? <Navigate to={AppRoutes.MAIN}/>
    : <Component/>;
};



export const PrivateRoute = ({Component}) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  return !authUser?.email
    ? <Component/>
    : <Navigate to={AppRoutes.MAIN}/>
};
