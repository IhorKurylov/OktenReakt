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
  },
  {
    path: AppRoutes.LESSON7,
    label: 'Lesson7'
  },
  {
    path: AppRoutes.LESSON8,
    label: 'Lesson8'
  },
  {
    path: AppRoutes.Lesson8Nested,
    label: 'Lesson8Nested'
  },
  {
    path: AppRoutes.LESSON9,
    label: 'Lesson9'
  },
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
        <Link to={link.path}>{link.label}</Link>
      ))}
    </div>
  );
};

export default Navbar;
