import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginForm from 'pages/LoginForm';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/tracker"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<LoginForm />} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/signin" component={<HomePage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
