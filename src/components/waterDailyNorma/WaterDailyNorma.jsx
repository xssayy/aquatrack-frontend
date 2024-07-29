import { useTranslation } from 'react-i18next';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const { t } = useTranslation();
  const dailyWater = 1.5;

  return (
    <div className={css.waterDailyContainer}>
      <h2 className={css.waterDailyTitle}>
        {dailyWater} {t('General vars.L')}
      </h2>
      <p className={css.waterDailyText}>
        {t('Tracker page.Water main info.My daily norma')}
      </p>
    </div>
  );
};

export default WaterDailyNorma;
