import { useState } from 'react';

import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';

import css from './WaterDetailedInfo.module.css';

import MonthInfo from 'components/MonthInfo/MonthInfo.jsx';

const WaterDetailedInfo = () => {
  const [chosenDate, setChosenDate] = useState(new Date().toISOString());

  return (
    <div className={css.waterDetailedInfoContainer}>
      <UserPanel />
      <DailyInfo value={chosenDate} setChosenDate={setChosenDate} />
      <MonthInfo value={chosenDate} setChosenDate={setChosenDate} />
    </div>
  );
};

export default WaterDetailedInfo;
