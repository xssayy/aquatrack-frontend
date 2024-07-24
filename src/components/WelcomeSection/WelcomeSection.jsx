import { NavLink } from 'react-router-dom';
import css from './WelcomeSection.module.css';

export const WelcomeSection = () => {
  return (
    <div className={css.welcomeSection}>
      <div className={css.welcomeLogo}>
        <a href="/" className={css.logo}>
          AQUATRACK
        </a>
      </div>
      <p className={css.welcomeText}>Record daily water intake and track</p>
      <h1 className={css.welcomeTitle}>Water consumption tracker</h1>
      <div className={css.welcomeThumb}>
        <NavLink className={css.linkTracker} to="/aquatrack-frontend/signup">
          Try tracker
        </NavLink>
        <NavLink className={css.linkSignIn} to="/aquatrack-frontend/signin">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};
