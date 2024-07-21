import WaterDailyNorma from '../waterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../waterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../addWaterBtn/AddWaterBtn.jsx';

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
