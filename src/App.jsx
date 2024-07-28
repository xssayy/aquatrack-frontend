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
import { useTranslation } from 'react-i18next';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //Тест - перенести потім на компонент, де буде кнопка зміни мови
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  const changeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('ua')}>Ua</button>
      <HomePage />
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
