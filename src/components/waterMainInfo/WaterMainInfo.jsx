import WaterDailyNorma from '../waterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../waterProgressBar/WaterProgressBar.jsx';
import MainAddWaterBtn from '../MainAddWaterBtn/MainAddWaterBtn.jsx';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.waterMainContainer}>
      <a href="/aquatrack-frontend" className={css.waterMainTitle}>
        Aquatrack
      </a>
      <WaterDailyNorma />
      <WaterProgressBar />
      <MainAddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
