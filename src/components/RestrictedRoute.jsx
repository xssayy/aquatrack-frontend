import { Navigate } from 'react-router-dom';

// import { selectIsLoggedIn } from '../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
