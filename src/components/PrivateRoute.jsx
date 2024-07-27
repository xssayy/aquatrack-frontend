import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
