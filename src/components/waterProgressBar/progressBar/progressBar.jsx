import { Line } from 'rc-progress';

import css from './progressBar.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodayWaterAmount } from '../../../redux/water/selectors';
import { selectWaterDailyNorma } from '../../../redux/user/selectors';
import { getTodayWater } from '../../../redux/water/operations';

const ProgressBar = () => {
  const dailyAmount = useSelector(selectTodayWaterAmount);
  const dailyNorma = useSelector(selectWaterDailyNorma);
  const dispatch = useDispatch();

  // const [percent, setPercent] = useState(0);

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);

  // useEffect(() => {
  //   if (dailyNorma > 0) {
  //     const value = Math.round(dailyAmount / (dailyNorma * 10));
  //     setPercent(value > 100 ? 100 : value);
  //   }
  // }, [dailyAmount, dailyNorma]);

  const value = Math.round(dailyAmount / (dailyNorma * 10));
  const percent = value > 100 ? 100 : value;

  return (
    <div className={css.progressContainer}>
      <div className={css.progressBarWrapper}>
        <Line
          percent={percent}
          strokeColor="#9be1a0"
          trailColor="#f0eff4"
          className={css.progressBarLine}
        />
        <div
          className={css.progressCircle}
          style={{ left: `calc(${percent}% - 0px)` }}
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
