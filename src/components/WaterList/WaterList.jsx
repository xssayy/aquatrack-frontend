
import WaterItem from "components/WaterItem/WaterItem";
import { useState } from "react";
import css from "./WaterList.module.css"

const WaterList = () => {
  const [waterData, setWaterData] = useState([]);
// (state) => state.water.items;

  return (
    <ul className={css.list}>
      <WaterItem/>
      <WaterItem/>
      <WaterItem/>
      {waterData.map((water) => {
          return (
            <li key={water.id}>
              <WaterItem water={water} />
            </li>
          );
        })}
    </ul>
  );
};


export default WaterList;
