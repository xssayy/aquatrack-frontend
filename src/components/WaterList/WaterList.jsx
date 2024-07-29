import { useDispatch, useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';

import css from './WaterList.module.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { selectChosenDate, selectGetDaily } from '../../redux/water/selectors';
import { useEffect } from 'react';
import { getDaily } from '../../redux/water/operations';

const WaterList = () => {
  const mockData = useSelector(selectGetDaily);
  const chosenDate = useSelector(selectChosenDate);
  const dispatch = useDispatch();

  useEffect(() => {
    const [chosenFullDate] = chosenDate.split('T');
    const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

    const date = `${chosenYear}-${chosenMonth}-${chosenDay}`;
    dispatch(getDaily(date));
  }, []);

  // const [waterData, setWaterData] = useState([]);
  // Mock data for testing scroll
  // const mockData = [
  //   { id: 1, amount: 250, time: '10:20am' },
  //   { id: 2, amount: 50, time: '11:00am' },
  //   { id: 3, amount: 150, time: '13:00pm' },
  //   { id: 4, amount: 300, time: '17:00pm' },
  // ];

  return (
    <PerfectScrollbar className={css.scrollbar}>
      <ul className={css.list}>
        {mockData &&
          mockData?.map(water => {
            return (
              <li key={water._id}>
                <WaterItem water={water} />
              </li>
            );
          })}
      </ul>
    </PerfectScrollbar>
  );
};

export default WaterList;
