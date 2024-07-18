import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  return (
    <div className={css.waterDailySection}>
      <h2 className={css.waterDailyTitle}>1.5 L</h2>
      {/*h2 - значення з UserSettingsForm */}
      <p className={css.waterDailyText}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
