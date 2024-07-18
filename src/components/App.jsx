import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginForm from 'pages/LoginForm';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/home"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/home" component={<LoginForm />} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
      </Routes>
    </Layout>
  );
};
