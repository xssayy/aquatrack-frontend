import css from './Calendar.module.css';
import clsx from 'clsx';
import { CalendarItem } from '../../components/CalendarItem/CalendarItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthly } from '../../redux/water/operations';
import { getAllUsersCount, getUserInfo } from '../../redux/user/operations';
import { selectMonthly } from '../../redux/water/selectors';

const response = [
  { time: '2024-07-22', amount: 0, userId: null, _id: null },
  { time: '2024-07-23', amount: 0, userId: null, _id: null },
  {
    time: '2024-07-24',
    amount: 50,
    userId: '66a407ea281e82ed6b94a09f',
    _id: '66a60bf85d4d94b8053c994e',
  },
  { time: '2024-07-25', amount: 0, userId: null, _id: null },
  { time: '2024-07-26', amount: 0, userId: null, _id: null },
  { time: '2024-07-27', amount: 0, userId: null, _id: null },
];

export const getNumOfDaysInMonth = chosenDate => {
  const year = chosenDate.getFullYear();
  const month = chosenDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return daysInMonth;
};

const getDailyProgressPercentage = ({ day, month, year, response }) => {
  //приводи місяць до формату "06" замість "6 "
  const corMonth = month < 10 ? `0${month}` : month;

  const dayString = `${year}-${corMonth}-${day}`;
  const dayData = response.find(entry => entry.time === dayString);
  return dayData ? dayData.amount : 0;
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
    const dailyWaterPercentage = Math.floor(
      100 *
        (getDailyProgressPercentage({
          day,
          month: chosenMonth,
          year: chosenYear,
          response,
        }) /
          1800)
    );

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

export const Calendar = ({ chosenDate, setChosenDate }) => {
  const dispatch = useDispatch();
  const waterMonth = useSelector(selectMonthly);
  const [loading, setLoading] = useState(true);

  //отримуємо воду за місяць => записуємо в редакс => відмальовуємо
  useEffect(() => {
    const year = new Date(chosenDate).getFullYear();
    let month = new Date(chosenDate).getMonth() + 1;

    //приводи місяць до формату "06" замість "6 "
    month = month < 10 ? `0${month}` : month;

    dispatch(getMonthly(`${year}-${month}`));
  }, []);

  // useEffect(() => {
  //тест /users/currentUser
  //   dispatch(getUserInfo());
  // });

  // useEffect(() => {
  //тест users/userAmount
  //   dispatch(getAllUsersCount());
  // });

  const daysWithWater = getDailyWaterPercentageFromBackend({
    chosenDate: new Date(chosenDate),
    response: waterMonth.data,
  });
  //тут ми отримали масив у вигляді daysWithWater =
  // [
  //   {
  //     date: 1,
  //     waterPercentage: 75,
  //     isToday: false,
  //   },
  //   {
  //     date: 2,
  //     waterPercentage: 5,
  //        isToday: true,
  //   },
  // ];

  return (
    <div>
      <ul className={css.days}>
        {daysWithWater.map(day => {
          return (
            <li key={day.date} className={clsx(css.day)}>
              <CalendarItem data={day} setChosenDate={setChosenDate} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
