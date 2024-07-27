import { Navigate } from 'react-router-dom';

// import { selectIsLoggedIn } from '../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
