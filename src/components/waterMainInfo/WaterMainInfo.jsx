import WaterDailyNorma from '../waterDailyNorma/WaterDailyNorma.jsx';
// import WaterProgressBar from '../waterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../addWaterBtn/AddWaterBtn.jsx';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.waterMainContainer}>
      <h1 className={css.waterMainTitle}>Aquatrack</h1>
      <WaterDailyNorma />
      {/* <WaterProgressBar /> */}
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
