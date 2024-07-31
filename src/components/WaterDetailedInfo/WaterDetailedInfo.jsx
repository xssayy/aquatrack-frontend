import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';

import css from './WaterDetailedInfo.module.css';

import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterLoading } from '../../redux/water/selectors.js';
import Loader from '../Loader/Loader.jsx';
import { useEffect } from 'react';

const WaterDetailedInfo = () => {
  const waterIsLoading = useSelector(selectWaterLoading);
  // const userIsLoading = useSelector(selectWaterLoading);

  return (
    <>
      {waterIsLoading && <Loader />}
      <div className={css.waterDetailedInfoContainer}>
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </div>
    </>
  );
};

export default WaterDetailedInfo;
