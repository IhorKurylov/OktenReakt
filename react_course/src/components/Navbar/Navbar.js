import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../Routing/AppRoutes.js';

const Navbar = () => {
const links = [
  {
    path: AppRoutes.MAIN,
    label: 'Main'
  },
  {
    path: AppRoutes.LOGIN,
    label: 'LOGIN'
  },
  {
    path: AppRoutes.USERS,
    label: 'USERS'
  },
  {
    path: AppRoutes.MAIN,
    label: 'Main'
  }
]
  const {pathname} = useLocation();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'yellow',
      height: 40
    }}>
      {links.map((link) => (
        <Link style={{backgroundColor: link.path === pathname ? 'red' : 'blue'}}
              to={link.path}>{link.label}</Link>
      ))}
    </div>
  );
};

export default Navbar;
