import ProgressBar from './progressBar/progressBar.jsx';

import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.waterProgressContainer}>
      <h2 className={css.waterProgressTitle}>Today</h2>
      <ProgressBar />
    </div>
  );
};

export default WaterProgressBar;
