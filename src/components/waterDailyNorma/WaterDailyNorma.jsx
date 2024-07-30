import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectWaterDailyNorma } from '../../redux/user/selectors';

const WaterDailyNorma = () => {
  const dailyWater = useSelector(selectWaterDailyNorma);

  return (
    <div className={css.waterDailyContainer}>
      <h2 className={css.waterDailyTitle}>{dailyWater ? dailyWater : 0} L</h2>
      <p className={css.waterDailyText}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
