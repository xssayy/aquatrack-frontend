import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';

const MonthInfo = () => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.dateWrapper}>
        <h2 className={css.title}>Month</h2>

        <CalendarPagination />
      </div>

      <Calendar />
    </div>
  );
};

export default MonthInfo;
