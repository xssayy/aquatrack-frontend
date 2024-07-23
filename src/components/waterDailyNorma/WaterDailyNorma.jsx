import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const dailyWater = 1.5;

  return (
    <div className={css.waterDailyContainer}>
      <h2 className={css.waterDailyTitle}>{dailyWater} L</h2>
      <p className={css.waterDailyText}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
