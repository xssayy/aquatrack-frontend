import WaterDailyNorma from '../waterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../waterProgressBar/WaterProgressBar';
import AddWaterBtn from '../addWaterBtn/AddWaterBtn';

const WaterMainInfo = () => {
  return (
    <div>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
