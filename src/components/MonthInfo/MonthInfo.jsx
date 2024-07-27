import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';

const MonthInfo = () => {
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
    <div className={css.mainWrapper}>
      <div className={css.dateWrapper}>
        <h2 className={css.title}>Month</h2>

        <CalendarPagination
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
        />
      </div>

      <Calendar chosenDate={chosenDate} />
    </div>
  );
};

export default MonthInfo;
