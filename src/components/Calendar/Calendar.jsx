import css from './Calendar.module.css';
import clsx from 'clsx';
import { CalendarItem } from '../../components/CalendarItem/CalendarItem';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthly } from '../../redux/water/operations';
import { getAllUsersCount, getUserInfo } from '../../redux/user/operations';
import {
  selectChosenDate,
  selectGetDaily,
  selectMonthly,
  selectWaterLoading,
} from '../../redux/water/selectors';
import { selectWaterDailyNorma } from '../../redux/user/selectors';

export const getNumOfDaysInMonth = chosenDate => {
  const year = chosenDate.getFullYear();
  const month = chosenDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return daysInMonth;
};

const getDailyPercent = ({ day, month, year, response }) => {
  //приводи місяць до формату "06" замість "6 "

  const corMonth = month < 10 ? `0${month}` : month;
  const corDay = day < 10 ? `0${day}` : day;

  const dayString = `${year}-${corMonth}-${corDay}`;
  const dayData = response?.find(entry => {
    return entry.time === dayString;
  });

  return dayData ? parseInt(dayData.daylyProgress, 10) : 0;
};

const getDailyWaterPercentageFromBackend = ({ chosenDate, response }) => {
  //isEnabled вказує чи клікабельна поточна кнопка
  //тобто всі кнопки включно до сьогоднішнього дня активні
  //кнопки з завтрашнього дня неактивні
  let isEnabled = true;

  //в data зберігатимемо масив об"єктів, що містять date, waterPercentage, isToday
  const data = [];

  const chosenMonth = chosenDate.getMonth() + 1;

  //обраний рік у форматі 2024
  const chosenYear = chosenDate.getFullYear();

  //щоб перевірити чи обраний місяць є поточним, перевіряємо дату
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  //перевіряємо чи вибраний місяць та рік є поточним
  const isCurrentMonthAndYear =
    currentYear === chosenYear && currentMonth === chosenDate.getMonth();

  //визначаємо кількість днів у вибраному місяці
  const daysInMonth = getNumOfDaysInMonth(chosenDate);

  // створюємо масив з властивостями date, waterPercentage, isToday
  for (let day = 1; day <= daysInMonth; day++) {
    // отримуємо дані відсотків з БЕ пошуком в масив по даті
    const percentage = getDailyPercent({
      day,
      month: chosenMonth,
      year: chosenYear,
      response,
    });

    const dailyWaterPercentage = percentage > 100 ? 100 : percentage;

    //перевіряємо чи обраний день це сьогоднійшній день для подальшої стилізації
    const isToday = isCurrentMonthAndYear && currentDay === day;

    const newDay = new Date(chosenDate.toISOString());
    newDay.setDate(day);

    const clickedDay = newDay.toISOString();

    data.push({
      date: day,
      waterPercentage: dailyWaterPercentage,
      isToday,
      isEnabled,
      chosenDate: chosenDate.toISOString(),
      clickedDay,
    });

    //визначаємо поточний день для стилізації
    if (isToday) isEnabled = false;
  }
  return data;
};

export const Calendar = () => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectChosenDate);
  const waterMonth = useSelector(selectMonthly);
  const waterDaily = useSelector(selectGetDaily);

  const loading = useSelector(selectWaterLoading);
  const waterNorma = useSelector(selectWaterDailyNorma);

  //отримуємо воду за місяць => записуємо в редакс => відмальовуємо
  useEffect(() => {
    const year = new Date(chosenDate).getFullYear();
    let month = new Date(chosenDate).getMonth() + 1;

    //приводи місяць до формату "06" замість "6 "
    month = month < 10 ? `0${month}` : month;

    dispatch(getMonthly(`${year}-${month}`));
    dispatch(getUserInfo());
  }, [dispatch, chosenDate]);

  const daysWithWater = useMemo(
    () =>
      getDailyWaterPercentageFromBackend({
        chosenDate: new Date(chosenDate),
        response: waterMonth ? waterMonth : [],
        dailyNorma: waterNorma,
      }),
    [chosenDate, loading, waterMonth, waterNorma, waterDaily]
  );

  return (
    <div>
      <ul className={css.days}>
        {daysWithWater.map(day => {
          return (
            <li key={day.date} className={clsx(css.day)}>
              <CalendarItem data={day} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
