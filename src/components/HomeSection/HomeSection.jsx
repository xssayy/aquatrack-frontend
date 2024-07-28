import { NavLink } from 'react-router-dom';
import css from './HomeSection.module.css';
import LogoLink from '../LogoLink/LogoLink';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
  const { t } = useTranslation();
  return (
    <div className={css.welcomeSection}>
      <LogoLink />
      <div className={css.welcomeContainer}>
        <p className={css.welcomeText}>
          {t('Record daily water intake and track')}
        </p>
        <h1 className={css.welcomeTitle}>Water consumption tracker</h1>
        <div className={css.welcomeThumb}>
          <NavLink className={css.linkTracker} to="/signup">
            {t('Try tracker')}
          </NavLink>
          <NavLink className={css.linkSignIn} to="/signin">
            {t('Sign in')}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
