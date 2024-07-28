import clsx from 'clsx';
import css from './CalendarItem.module.css';

export const CalendarItem = ({ data, setChosenDate }) => {
  const [chosenFullDate] = data.chosenDate.split('T');
  const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');
  // console.log('chosenDay: ', chosenDay);
  // console.log('data.date: ', data.date);
  const isChosenDay = chosenDay == data.date;

  // console.log('isChosenDay: ', isChosenDay);

  const handleClick = () => {
    console.log('click');

    // const inputDate = new Date(data.fullDateISOString);
    // inputDate.setDate(data.day);
    // const chosenDate = inputDate.toISOString();
    // console.log('newDate: ', chosenDate);

    //тут ми маємо передати в редакс chosenDate="2024-07-20T20:10:02.082Z"
    // console.log('data.chosenDay: ', data.chosenDate);
    // console.log('data.clickedDay: ', data.clickedDay);

    //! console.log(`you choose ${chosenYear}-${chosenMonth}-${chosenDay}`);
    setChosenDate(data.clickedDay);
    // const resp = '2024-07-20T20:10:02.082Z';
    // const convertedResp = new Date(resp);
    // console.log(convertedResp.getDate());
  };
  // console.log(data);

  return (
    <button
      className={css.button}
      disabled={!data.isEnabled}
      onClick={handleClick}
    >
      <p
        className={clsx(css.date, {
          [css.full]: data.waterPercentage >= 100,
          // [css.current]: data.isToday,
          [css.current]: isChosenDay,

          // [css.chosen]: isChosenDay,
        })}
      >
        {data.date}
      </p>
      <p className={css.percentage}>{data.waterPercentage}%</p>
    </button>
  );
};
