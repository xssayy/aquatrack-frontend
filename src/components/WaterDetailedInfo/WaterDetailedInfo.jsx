import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';

import css from './WaterDetailedInfo.module.css';

import MonthInfo from 'components/MonthInfo/MonthInfo.jsx';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfoContainer}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
