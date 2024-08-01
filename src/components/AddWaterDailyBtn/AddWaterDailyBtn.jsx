import { useState } from 'react';
import css from './AddWaterDailyBtn.module.css';
import WaterModal from '../WaterModal/WaterModal';
import { format } from 'date-fns';
import Loader from '../Loader/Loader';

const AddWaterDailyBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {isLoading && <Loader type="blue" />}

      <div className={css.addBtn}>
        <button type="button" className={css.btn} onClick={handleOpenModal}>
          +
        </button>
        <p className={css.text} onClick={handleOpenModal}>
          Add water
        </p>

        <WaterModal
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          closeModal={handleCloseModal}
          isOpen={modalIsOpen}
          type="add"
          initialData={{ amount: 50, time: `${formattedTime}` }}
        />
      </div>
    </>
  );
};

export default AddWaterDailyBtn;
