import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

import 'modern-normalize';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

// Lazy imports
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignInPage />} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
};
