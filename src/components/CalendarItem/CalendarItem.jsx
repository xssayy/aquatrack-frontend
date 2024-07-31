import clsx from 'clsx';
import css from './CalendarItem.module.css';
import { useDispatch } from 'react-redux';
import { getDaily } from '../../redux/water/operations';
import { setChosenDate } from '../../redux/water/slice';

export const CalendarItem = ({ data }) => {
  const dispatch = useDispatch();

  const [chosenFullDate] = data.chosenDate.split('T');
  const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

  const [clickedFullDate] = data.clickedDay.split('T');
  const [clickedYear, clickedMonth, clickedDay] = clickedFullDate.split('-');

  const isChosenDay = chosenDay == data.date;

  const handleClick = () => {
    const date = `${clickedYear}-${clickedMonth}-${clickedDay}`;

    dispatch(getDaily(date));

    dispatch(setChosenDate(data.clickedDay));
  };

  return (
    <button
      className={css.button}
      disabled={!data.isEnabled}
      onClick={handleClick}
    >
      <p
        className={clsx(css.date, {
          [css.full]: data.waterPercentage >= 100,
          [css.current]: isChosenDay,
        })}
      >
        {data.date}
      </p>
      <p className={css.percentage}>{data.waterPercentage}%</p>
    </button>
  );
};
