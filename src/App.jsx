import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

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
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import LanguageSelector from './components/LanguageBtn/LanguageSelector';
import WaterDetailedInfo from './components/WaterDetailedInfo/WaterDetailedInfo';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <LanguageSelector />
      <WaterDetailedInfo />
    </div>

    // <SharedLayout>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route
    //       path="/signup"
    //       element={
    //         <RestrictedRoute redirectTo="/tracker" component={<SignUpPage />} />
    //       }
    //     />
    //     <Route
    //       path="/signin"
    //       element={
    //         <RestrictedRoute redirectTo="/tracker" component={<SingInPage />} />
    //       }
    //     />
    //     <Route
    //       path="/tracker"
    //       element={
    //         <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
    //       }
    //     />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </SharedLayout>
  );
};
