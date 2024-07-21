import clsx from 'clsx';
import css from './CalendarItem.module.css';

export const CalendarItem = ({ day }) => {
  return (
    <button>
      <p
        className={clsx(css.date, {
          [css.full]: day.waterPercentage === 100,
          [css.current]: day.isToday,
        })}
      >
        {day.date}
      </p>
      <p className={css.percentage}>{day.waterPercentage}%</p>
    </button>
  );
};
