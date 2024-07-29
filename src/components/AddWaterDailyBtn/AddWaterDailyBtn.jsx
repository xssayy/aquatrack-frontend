import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import css from './AddWaterDailyBtn.module.css';

import WaterModal from '../WaterModal/WaterModal';

import { format } from 'date-fns';

const AddWaterDailyBtn = ({ chosenDate, setChosenDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const currentDate = new Date(); // Поточна дата
  const formatTime = date => {
    return format(date, 'HH:mm');
  };
  const formattedTime = formatTime(currentDate);

  return (
    <div className={css.addBtn}>
      <button className={css.btn} onClick={handleOpenModal}>
        +
      </button>
      <p className={css.text}>Add water</p>

      <WaterModal
        closeModal={handleCloseModal}
        isOpen={modalIsOpen}
        type="add"
        initialData={{ amount: 50, time: `${formattedTime}` }}
        chosenDate={chosenDate}
        setChosenDate={setChosenDate}
      />
    </div>
  );
};

export default AddWaterDailyBtn;
