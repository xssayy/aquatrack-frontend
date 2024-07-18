import css from './WaterProgressBar.module.css';
import ProgressBar from './progressBar/progressBar';

const WaterProgressBar = () => {
  return (
    <div className={css.waterProgressSection}>
      <h2 className={css.waterProgressTitle}>Today</h2>

      <ProgressBar value={80} />
      {/*В ProgressBar замість "80" потім можна передати реальне значення*/}
    </div>
  );
};

export default WaterProgressBar;
