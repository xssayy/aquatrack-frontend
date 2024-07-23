import { useState } from "react";
import ModalWindow from "components/ModalWindow/ModalWindow";
import css from "./AddWaterDailyBtn.module.css"

import WaterModal from "components/WaterModal/WaterModal";

import { format, parseISO } from 'date-fns';

const AddWaterDailyBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

const currentDate = new Date(); // Поточна дата

const formatTime = (date) => {
  return format(date, 'hh:mmaaa').toLowerCase();
};

const formattedTime = formatTime(currentDate);
console.log(formattedTime); // Виведе "06:58am"



  return (
    <div className={css.addBtn}>
      <button className={css.btn} onClick={handleOpenModal}>
        +
      </button>
      <p className={css.text}>Add water</p>
            {modalIsOpen && (
        <ModalWindow onCloseModal={handleCloseModal} modalIsOpen={handleOpenModal}>
          <WaterModal
            type='add'
            initialData={{ amount: "50", time: `${formattedTime}` }}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default AddWaterDailyBtn;
