import css from './Calendar.module.css';
import clsx from 'clsx';
import { CalendarItem } from '../../components/CalendarItem/CalendarItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMonthly } from '../../redux/water/operations';
import { getAllUsersCount, getUserInfo } from '../../redux/user/operations';

//приклад відповіді з бекенда
const response = [
  {
    _id: 'qweqweq',
    date: '1, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
    userId: 'asdasdasdas',
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
    date: '3, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 2000,
    dailyProgressPercentage: 100,
  },
  {
    _id: 'qweqweq',
    date: '4, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
  },
  {
    _id: 'qweqweq',
    date: '6, July',
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

  {
    _id: 'qweqweq',
    date: '8, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
  },
  {
    _id: 'qweqweq',
    date: '9, July',
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
    date: '18, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1500,
    dailyProgressPercentage: 75,
  },
  {
    _id: 'qweqweq',
    date: '19, July',
    dailyWaterRequirement: 2000,
    dailyProgress: 1000,
    dailyProgressPercentage: 50,
  },
  {
    _id: 'qweqweq',
    date: '20, July',
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
  //isEnabled вказує чи клікабельна поточна кнопка
  //тобто всі кнопки включно до сьогоднішнього дня активні
  //кнопки з завтрашнього дня неактивні
  let isEnabled = true;

  //в data зберігатимемо масив об"єктів, що містять date, waterPercentage, isToday
  const data = [];

  //обраний місяць у текстовому форматі по типу "July"
  const chosenMonth = chosenDate.toLocaleDateString('en-US', {
    month: 'long',
  });

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
    const dailyWaterPercentage = getDailyProgressPercentage({
      day,
      month: chosenMonth,
      response,
    });

    //перевіряємо чи обраний день це сьогоднійшній день для подальшої стилізації
    const isToday = isCurrentMonthAndYear && currentDay === day;

    //!кожному дню додаємо дату - переробити в 2024-07-23
    chosenDate.setDate(day);
    const chosenDay = chosenDate.toISOString();

    data.push({
      date: day,
      waterPercentage: dailyWaterPercentage,
      isToday,
      isEnabled,
      chosenDay,
    });

    //визначаємо поточний день для стилізації
    if (isToday) isEnabled = false;
  }
  return data;
};

export const Calendar = ({ chosenDate, setChosenDate }) => {
  const dispatch = useDispatch();
  //chosenDate приходить у форматі '2024-07-20T20:10:02.082Z';
  //перетворюємо в об"єкт Date
  const convertedChosendate = new Date(chosenDate);

  //отримуємо воду за місяць => записуємо в редакс => відмальовуємо
  useEffect(() => {
    console.log('convertedChosendate: ', convertedChosendate);
    console.log('chosenDate: ', chosenDate);

    const year = convertedChosendate.getFullYear();
    let month = convertedChosendate.getMonth() + 1;

    //приводи місяць до формату "06" замість "6 "
    month = month < 10 ? `0${month}` : month;

    // console.log(`${year}-${month}`);
    dispatch(getMonthly(`${year}-${month}`));
  });

  // useEffect(() => {
  //тест /users/currentUser
  //   dispatch(getUserInfo());
  // });

  // useEffect(() => {
  //тест users/userAmount
  //   dispatch(getAllUsersCount());
  // });

  const daysWithWater = getDailyWaterPercentageFromBackend({
    chosenDate: convertedChosendate,
    response,
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
