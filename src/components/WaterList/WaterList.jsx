import { useRef } from 'react';
import WaterItem from '../WaterItem/WaterItem';
// import { useState } from "react";
import css from './WaterList.module.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import useScrollbar from '../scroll/scroll';

const WaterList = () => {
  // const [waterData, setWaterData] = useState([]);
  // Mock data for testing scroll
  const mockData = [
    { id: 1, amount: 250, time: '10:20am' },
    { id: 2, amount: 50, time: '11:00am' },
    { id: 3, amount: 150, time: '13:00pm' },
    // { id: 4, amount: 300, time: '17:00pm' },
  ];

  const waterWrapper = useRef(null);
  const hasScroll = mockData.length > 2;
  useScrollbar(waterWrapper, hasScroll);

  return (
    <div className={css.listContainer} ref={waterWrapper}>
      <ul className={css.list}>
        {mockData.map(water => {
          return (
            <li key={water.id}>
              <WaterItem water={water} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WaterList;
