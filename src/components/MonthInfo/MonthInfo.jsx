import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';
import { Chart } from '../Chart/Chart';

const MonthInfo = () => {
  const [isChart, setIsChart] = useState(false);

  const toggleChart = () => setIsChart(!isChart);

  return (
    <div className={css.mainWrapper}>
      <div className={css.dateWrapper}>
        <h2 className={css.title}>Month</h2>

        <CalendarPagination toggleChart={toggleChart} />
      </div>

      {isChart ? <Chart /> : <Calendar />}
    </div>
  );
};

export default MonthInfo;
