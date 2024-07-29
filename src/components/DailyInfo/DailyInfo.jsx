import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import AddWaterDailyBtn from '../AddWaterDailyBtn/AddWaterDailyBtn';

const DailyInfo = ({ chosenDate, setChosenDate }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.title}>
          <ChooseDate chosenDate={chosenDate} />
          <AddWaterDailyBtn
            chosenDate={chosenDate}
            setChosenDate={setChosenDate}
          />
        </div>
        <WaterList chosenDate={chosenDate} />
      </div>
    </section>
  );
};

export default DailyInfo;
