
import { format, isSameDay, parseISO } from "date-fns";
import css from "./ChooseDate.module.css"


const ChooseDate = () => {
  const currentDate = new Date(); // Поточна дата
  // const selectedDate = useSelector(selectActiveDay); //Вибрана дата
  const selectedDate = "2024-07-20T06:58:55.103Z"

const selectedDateObj = parseISO(selectedDate); // Перетворення обраної дати на об'єкт Date

const formatDate = (date) => {
  return format(date, 'd, MMMM');
};

const formattedDate = formatDate(selectedDateObj);

const isToday = (date1, date2) => {
  return isSameDay(date1, date2);
};


//   const selectedDateObj = new Date(selectedDate); // Перетворення обраної дати на об'єкт Date
// console.log(selectedDateObj);

//   const formatDate = (date) => {
//     const day = date.getDate();
//     const month = date.toLocaleString('en-US', { month: 'long' });
//     return `${day}, ${month}`;
//   };

  // console.log(formatDate(currentDate));

  // const isToday = (date1, date2) => {
  //   return (
  //     date1.getDate() === date2.getDate() &&
  //     date1.getMonth() === date2.getMonth() &&
  //     date1.getFullYear() === date2.getFullYear()
  //   );
  // };

  return (
    <h2 className={css.date}>
      {isToday(currentDate, selectedDateObj) ? "Today" : formatDate(selectedDateObj)}
    </h2>
  );
};

export default ChooseDate;
