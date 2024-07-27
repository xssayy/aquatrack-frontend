import { Navigate } from 'react-router-dom';

// import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
