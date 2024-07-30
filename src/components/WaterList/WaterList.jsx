import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import WaterItem from '../WaterItem/WaterItem';

import css from './WaterList.module.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { selectChosenDate, selectGetDaily } from '../../redux/water/selectors';
import { useEffect } from 'react';
import { getDaily } from '../../redux/water/operations';
import useScrollbar from '../scroll/scroll';

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

  const waterWrapper = useRef(null);
  const hasScroll = mockData.length > 2;
  useScrollbar(waterWrapper, hasScroll);

  return (
    <div className={css.listContainer} ref={waterWrapper}>
      <ul className={css.list}>
        {mockData.length > 0 ? (
          mockData?.map(water => {
            return (
              <li key={water._id}>
                <WaterItem water={water} />
              </li>
            );
          })
        ) : (
          <p className={css.stub}>
            You haven't made any changes yet! <br />
            Please, track your progress.
          </p>
        )}
      </ul>
    </div>
  );
};

export default WaterList;
