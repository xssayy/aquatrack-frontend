import WaterDailyNorma from '../waterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../waterProgressBar/WaterProgressBar.jsx';
import MainAddWaterBtn from '../MainAddWaterBtn/MainAddWaterBtn.jsx';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.waterMainContainer}>
      <h1 className={css.waterMainTitle}>Aquatrack</h1>
      <WaterDailyNorma />
      <WaterProgressBar />
      <MainAddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
