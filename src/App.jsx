import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import TrackerPage from './pages/TrackerPage/TrackerPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import 'modern-normalize';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SingInPage from './pages/SignInPage/SignInPage';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

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
            <RestrictedRoute redirectTo="/tracker" component={<SingInPage />} />
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
