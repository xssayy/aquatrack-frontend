
import AddWaterBtn from "components/AddWaterBtn/AddWaterBtn";
import ChooseDate from "components/ChooseDate/ChooseDate";
import WaterList from "components/WaterList/WaterList";
import css from "./DailyInfo.module.css"


const DailyInfo = () => {

  return (
    <section className={css.section}>
    <div className={css.container}>
      <div className={css.title}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </div>
    </section>
  );
};

export default DailyInfo;

