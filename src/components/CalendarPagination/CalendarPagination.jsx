// import { useEffect, useState } from 'react';
import css from './CalendarPagination.module.css';
import Icon from 'components/shared/Icon';

export const CalendarPagination = ({ chosenDate, setChosenDate }) => {
  const handlePrevMonth = () => {
    setChosenDate(new Date(chosenDate.setMonth(chosenDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setChosenDate(new Date(chosenDate.setMonth(chosenDate.getMonth() + 1)));
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isLastMonth =
    currentMonth === chosenDate.getMonth() &&
    currentYear === chosenDate.getFullYear();

  const getMonthName = month => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[month];
  };

  return (
    <div className={css.dateWrapper}>
      <button onClick={handlePrevMonth} type="button" className={css.buttonLt}>
        <Icon
          id="arrow"
          width={18}
          height={18}
          className={css.iconLt}
          fillColor="#323f47"
        />
      </button>

      <h3 className={css.dateTitle}>
        {getMonthName(chosenDate.getMonth())}, {chosenDate.getFullYear()}
      </h3>
      <button
        onClick={handleNextMonth}
        type="button"
        className={css.buttonGt}
        disabled={isLastMonth}
      >
        <Icon
          id="arrow"
          width={18}
          height={18}
          className={css.iconGt}
          fillColor="#323f47"
        />
      </button>

      <Icon
        id="pie-chart"
        width={20}
        height={20}
        className={css.iconPieChart}
        fillColor="#323f47"
      />
    </div>
  );
};
