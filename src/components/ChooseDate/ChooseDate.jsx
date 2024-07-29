import { format, isSameDay, parseISO } from 'date-fns';
import css from './ChooseDate.module.css';
import { useSelector } from 'react-redux';
import { selectChosenDate } from '../../redux/water/selectors';

const ChooseDate = () => {
  const chosenDate = useSelector(selectChosenDate);
  const currentDate = new Date(); // Поточна дата

  const selectedDate = chosenDate;

  const selectedDateObj = parseISO(selectedDate); // Перетворення обраної дати на об'єкт Date

  const formatDate = date => {
    return format(date, 'd, MMMM');
  };

  const isToday = (date1, date2) => {
    return isSameDay(date1, date2);
  };

  //   const selectedDateObj = new Date(selectedDate); // Перетворення обраної дати на об'єкт Date

  //   const formatDate = (date) => {
  //     const day = date.getDate();
  //     const month = date.toLocaleString('en-US', { month: 'long' });
  //     return `${day}, ${month}`;
  //   };

  // const isToday = (date1, date2) => {
  //   return (
  //     date1.getDate() === date2.getDate() &&
  //     date1.getMonth() === date2.getMonth() &&
  //     date1.getFullYear() === date2.getFullYear()
  //   );
  // };

  return (
    <h2 className={css.date}>
      {isToday(currentDate, selectedDateObj)
        ? 'Today'
        : formatDate(selectedDateObj)}
    </h2>
  );
};

export default ChooseDate;
