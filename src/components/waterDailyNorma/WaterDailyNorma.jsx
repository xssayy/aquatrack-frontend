import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectWaterDailyNorma } from '../../redux/user/selectors';

const WaterDailyNorma = () => {
  const { t } = useTranslation();
  const dailyWater = useSelector(selectWaterDailyNorma);

  return (
    <div className={css.waterDailyContainer}>
      <h2 className={css.waterDailyTitle}>
        {dailyWater ? dailyWater : 0} {t('General vars.L')}
      </h2>
      <p className={css.waterDailyText}>
        {t('Tracker page.Water main info.My daily norma')}
      </p>
    </div>
  );
};

export default WaterDailyNorma;
