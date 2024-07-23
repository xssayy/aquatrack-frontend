import { useState } from 'react';

import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import { MonthInfo } from '../MonthInfo/MonthInfo.jsx';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  const [chosenDate, setChosenDate] = useState(new Date().toISOString());

  return (
    <div className={css['water-detailed-info-container']}>
      <UserPanel />
      <DailyInfo value={chosenDate} setChosenDate={setChosenDate} />
      <MonthInfo value={chosenDate} setChosenDate={setChosenDate} />
    </div>
  );
};

export default WaterDetailedInfo;
