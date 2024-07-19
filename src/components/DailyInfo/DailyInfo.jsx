
import AddWaterBtn from "components/AddWaterBtn/AddWaterBtn";
import ChooseDate from "components/ChooseDate/ChooseDate";
import WaterList from "components/WaterList/WaterList";
import css from "./DailyInfo.module.css"


const DailyInfo = () => {

  return (
    <div className={css.container}>
      <div className={css.title}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;

