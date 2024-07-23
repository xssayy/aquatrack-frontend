
import ChooseDate from "components/ChooseDate/ChooseDate";
import WaterList from "components/WaterList/WaterList";
import css from "./DailyInfo.module.css"
import AddWaterDailyBtn from "components/AddWaterDailyBtn/AddWaterDailyBtn";


const DailyInfo = () => {

  return (
    <section className={css.section}>
    <div className={css.container}>
      <div className={css.title}>
        <ChooseDate />
        <AddWaterDailyBtn />
      </div>
      <WaterList />
    </div>
    </section>

  );
};

export default DailyInfo;

