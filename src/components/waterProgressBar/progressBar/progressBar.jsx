import { Line } from 'rc-progress';

import css from './ProgressBar.module.css';

const ProgressBar = ({ value }) => {
  return (
    <div className={css.progressContainer}>
      <div className={css.progressBarWrapper}>
        <Line
          percent={value}
          strokeColor="#9be1a0"
          trailColor="#f0eff4"
          className={css.progressBarLine}
        />
        <div
          className={css.progressCircle}
          style={{ left: `calc(${value}% - 0px)` }}
        />
      </div>
      <div className={css.progressLabels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
