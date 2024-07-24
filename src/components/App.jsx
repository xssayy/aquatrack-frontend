// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import 'modern-normalize';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import SingInPage from 'pages/SignInPage/SignInPage';

export const App = () => {
  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(refreshUser());
  //   }
  // }, [dispatch, isLoggedIn]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="aquatrack-frontend/signup"
          element={
            <RestrictedRoute
              redirectTo="aquatrack-frontend/tracker"
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path="aquatrack-frontend/signin"
          element={
            <RestrictedRoute
              redirectTo="aquatrack-frontend/tracker"
              component={<SingInPage />}
            />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute
              redirectTo="aquatrack-frontend/signin"
              component={<HomePage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
