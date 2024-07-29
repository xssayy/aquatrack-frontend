import { useTranslation } from 'react-i18next';
import ProgressBar from './progressBar/progressBar.jsx';

import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  const { t } = useTranslation();
  return (
    <div className={css.waterProgressContainer}>
      <h2 className={css.waterProgressTitle}>{t('General vars.Today')}</h2>
      <ProgressBar value={50} />
      {/* В value потім буде приходити реальне значення, введене юзером*/}
    </div>
  );
};

export default WaterProgressBar;
