import { useEffect, useState } from 'react';
import css from './Calendar.module.css';
import clsx from 'clsx';
import { CalendarItem } from 'components/CalendarItem/CalendarItem';

//приклад відповіді з бекенда
const response = [
  {
    _id: 'qweqweq',
    date: '19, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
  },
  {
    _id: 'qweqweq',
    date: '20, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1000,
    dailyProgressPercentage: 50,
  },
  {
    _id: 'qweqweq',
    date: '17, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 2000,
    dailyProgressPercentage: 100,
  },
  {
    _id: 'qweqweq',
    date: '1, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
  },
  {
    _id: 'qweqweq',
    date: '2, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1000,
    dailyProgressPercentage: 50,
  },
  {
    _id: 'qweqweq',
    date: '7, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 2000,
    dailyProgressPercentage: 10,
  },
];

//отримати дату у вигляді "17, July"
// const getDayAndMonth = date => {
//   const day = date.toLocaleDateString('en-US', { day: 'numeric' });
//   const month = date.toLocaleDateString('en-US', { month: 'long' });
//   const formattedDate = `${day}, ${month}`;
//   return formattedDate;
// };

//отримати масив із днями у вигляді [1,2,3...31]
// export const getArrayOfDaysInMonth = chosenDate => {
//   const year = chosenDate.getFullYear();
//   const month = chosenDate.getMonth();

//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const days = [];

//   for (let day = 1; day <= daysInMonth; day++) {
//     days.push(day);
//   }
//   return days;
// };

//отримати кількість днів у місяці. передаємо chosenDate у вигляді
//chosenDate = new Date()
export const getNumOfDaysInMonth = chosenDate => {
  const year = chosenDate.getFullYear();
  const month = chosenDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return daysInMonth;
};

//отримати число дня тижня
// const getDayFromFullDate = date => {
//   const optionsDay = { day: 'numeric' };
//   return date.toLocaleDateString('en-US', optionsDay);
// };

//отримати назву місяця у вигляді "July"
// const getMonthFromFullDate = date => {
//   const optionsMonth = { month: 'long' };
//   return date.toLocaleDateString('en-US', optionsMonth);
// };

const getDailyProgressPercentage = ({ day, month, response }) => {
  const dayString = `${day}, ${month}`;
  const dayData = response.find(entry => entry.date === dayString);
  return dayData ? dayData.dailyProgressPercentage : 0;
};

const getDailyWaterPercentageFromBackend = ({ chosenDate, response }) => {
  const data = [];
  // const chosenMonth = chosenDate.getMonth();
  // console.log('chosenMonth: ', chosenMonth);
  // const chosenMonth = getMonthFromFullDate(chosenDate);
  const chosenMonth = chosenDate.toLocaleDateString('en-US', {
    month: 'long',
  });

  const chosenYear = chosenDate.getFullYear();
  console.log('chosenYear: ', chosenYear);
  console.log('chosenMonth: ', chosenDate.getMonth());

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  console.log('current year', currentYear);
  console.log('current month', currentMonth);

  const isCurrentMonthAndYear =
    currentYear === chosenYear && currentMonth === chosenDate.getMonth();

  if (isCurrentMonthAndYear) console.log('current month is chosen!!!');

  // console.log('chosenMonth: ', chosenMonth);

  const daysInMonth = getNumOfDaysInMonth(chosenDate);

  for (let day = 1; day <= daysInMonth; day++) {
    const dailyWaterPercentage = getDailyProgressPercentage({
      day,
      month: chosenMonth,
      response,
    });

    data.push({
      date: day,
      waterPercentage: dailyWaterPercentage,
      isToday: isCurrentMonthAndYear && currentDay === day,
    });
  }
  return data;
};

export const Calendar = ({ chosenDate }) => {
  // const days = getArrayOfDaysInMonth(chosenDate);
  // console.log(chosenDate);
  // console.log('Date.now(): ', Date.now());
  // console.log('new Date(): ', new Date());
  // console.log(getDayAndMonth(chosenDate));

  // console.table(getDailyWaterPercentageFromBackend({ chosenDate, response }));
  const daysWithWater = getDailyWaterPercentageFromBackend({
    chosenDate,
    response,
  });
  //тут ми отримали масив у вигляді daysWithWater =
  // [
  //   {
  //     date: 1,
  //     waterPercentage: 75,
  //   },
  //   {
  //     date: 2,
  //     waterPercentage: 5,
  //   },
  // ];

  return (
    <div className={css.container}>
      <ul className={css.days}>
        {daysWithWater.map(day => {
          return (
            <li key={day.date} className={clsx(css.day)}>
              <CalendarItem day={day} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
