// import { useEffect, useState } from 'react';
import css from './CalendarPagination.module.css';
import Icon from '../Icon/Icon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDaily } from '../../redux/water/operations';
import { selectChosenDate } from '../../redux/water/selectors';
import { setChosenDate } from '../../redux/water/slice';

export const CalendarPagination = () => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectChosenDate);

  useEffect(() => {
    const [chosenFullDate] = chosenDate.split('T');
    const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

    const date = `${chosenYear}-${chosenMonth}-${chosenDay}`;
    dispatch(getDaily(date));
  });
  //chosenDate приходить у форматі '2024-07-20T20:10:02.082Z';
  //перетворюємо в об"єкт Date
  const convertedChosendate = new Date(chosenDate);

  const handlePrevMonth = () => {
    dispatch(
      setChosenDate(
        new Date(
          convertedChosendate.setMonth(convertedChosendate.getMonth() - 1)
        ).toISOString()
      )
    );
  };

  const handleNextMonth = () => {
    dispatch(
      setChosenDate(
        new Date(
          convertedChosendate.setMonth(convertedChosendate.getMonth() + 1)
        ).toISOString()
      )
    );
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isLastMonth =
    currentMonth === convertedChosendate.getMonth() &&
    currentYear === convertedChosendate.getFullYear();

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
        {getMonthName(convertedChosendate.getMonth())},{' '}
        {convertedChosendate.getFullYear()}
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
