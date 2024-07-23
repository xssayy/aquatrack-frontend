import WaterMainInfo from 'components/waterMainInfo/WaterMainInfo';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import style from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={style.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default WelcomePage;
