import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginForm from 'pages/LoginForm';
import HomePage from 'pages/HomePage';
import Icon from './shared/Icon';

export const App = () => {
  return (
    <Icon id="plus" width={32} height={32} />
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<WelcomePage />} />
    //     <Route
    //       path="/signup"
    //       element={
    //         <RestrictedRoute
    //           redirectTo="/tracker"
    //           component={<RegistrationPage />}
    //         />
    //       }
    //     />
    //     <Route
    //       path="/signin"
    //       element={
    //         <RestrictedRoute redirectTo="/tracker" component={<LoginForm />} />
    //       }
    //     />
    //     <Route
    //       path="/tracker"
    //       element={
    //         <PrivateRoute redirectTo="/signin" component={<HomePage />} />
    //       }
    //     />
    //   </Routes>
    // </Layout>
  );
};
