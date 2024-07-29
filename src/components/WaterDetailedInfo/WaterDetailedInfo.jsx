import { useState } from 'react';

import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';

import css from './WaterDetailedInfo.module.css';

import MonthInfo from '../MonthInfo/MonthInfo.jsx';

const WaterDetailedInfo = () => {
  const [chosenDate, setChosenDate] = useState(new Date().toISOString());

  return (
    <div className={css.waterDetailedInfoContainer}>
      <UserPanel />
      <DailyInfo chosenDate={chosenDate} setChosenDate={setChosenDate} />
      <MonthInfo chosenDate={chosenDate} setChosenDate={setChosenDate} />
    </div>
  );
};

export default WaterDetailedInfo;
