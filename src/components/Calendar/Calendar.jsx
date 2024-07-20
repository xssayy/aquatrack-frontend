import { useEffect, useState } from 'react';
import css from './Calendar.module.css';
import clsx from 'clsx';

export const Calendar = ({ chosenDate }) => {
  // const [chosenDate, setChosenDate] = useState(new Date());

  // useEffect(() => {
  //   console.log('chosenMonth : ', chosenDate.getMonth());
  //   console.log('now month: ', new Date().getMonth());

  //   console.log('chosenYear : ', chosenDate.getFullYear());
  //   console.log('now year: ', new Date().getFullYear());
  // });

  // const handlePrevMonth = () => {
  //   setChosenDate(new Date(chosenDate.setMonth(chosenDate.getMonth() - 1)));
  // };

  // const handleNextMonth = () => {
  //   setChosenDate(new Date(chosenDate.setMonth(chosenDate.getMonth() + 1)));
  // };

  // const currentMonth = new Date().getMonth();
  // const currentYear = new Date().getFullYear();

  // const isLastMonth =
  //   currentMonth === chosenDate.getMonth() &&
  //   currentYear === chosenDate.getFullYear();

  const renderDays = () => {
    const year = chosenDate.getFullYear();
    const month = chosenDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className={css.day}>
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={css.container}>
      {/*
              <div className={css.header}>
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>
          {getMonthName(chosenDate.getMonth())} {chosenDate.getFullYear()}
        </h2>
        {!isLastMonth && <button >Next</button>}
      </div>
      */}

      <div className={css.days}>{renderDays()}</div>
    </div>
  );
};
