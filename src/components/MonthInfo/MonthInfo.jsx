import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

export const MonthInfo = () => {
  return (
    <div className={css.mainWrapper}>
      <h2 className={css.title}>Month</h2>

      <CalendarPagination />
    </div>
  );
};
