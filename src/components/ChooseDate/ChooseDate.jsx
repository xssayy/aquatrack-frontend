
import css from "./ChooseDate.module.css"


const ChooseDate = ({ selectedDate }) => {
  const currentDate = new Date(); // Поточна дата
selectedDate = "2024-07-04T06:58:55.103Z"
  const selectedDateObj = new Date(selectedDate); // Перетворення обраної дати на об'єкт Date
console.log(selectedDateObj);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    return `${day}, ${month}`;
  };

  console.log(formatDate(currentDate));

  const isToday = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <h2 className={css.date}>
      {isToday(currentDate, selectedDateObj) ? "Today" : formatDate(selectedDateObj)}
    </h2>
  );
};

export default ChooseDate;
