import { useState } from 'react';

import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';

import css from './WaterDetailedInfo.module.css';

import MonthInfo from '../MonthInfo/MonthInfo.jsx';

const WaterDetailedInfo = () => {
  const [chosenDate, setChosenDate] = useState(new Date().toISOString());
  console.log('WaterDetailedInfo chosenDate: ', chosenDate);

  return (
    <div className={css.waterDetailedInfoContainer}>
      <UserPanel />
      <DailyInfo value={chosenDate} setChosenDate={setChosenDate} />
      <MonthInfo chosenDate={chosenDate} setChosenDate={setChosenDate} />
    </div>
  );
};

export default WaterDetailedInfo;
