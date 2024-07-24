import WaterMainInfo from 'components/waterMainInfo/WaterMainInfo';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default HomePage;
