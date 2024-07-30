import { useState } from 'react';
import css from './AddWaterDailyBtn.module.css';
import WaterModal from '../WaterModal/WaterModal';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const AddWaterDailyBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();

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
      <button type="button" className={css.btn} onClick={handleOpenModal}>
        +
      </button>
      <p className={css.text}>{t('Tracker page.Water main info.Add water')}</p>

      <WaterModal
        closeModal={handleCloseModal}
        isOpen={modalIsOpen}
        type="add"
        initialData={{ amount: 50, time: `${formattedTime}` }}
      />
    </div>
  );
};

export default AddWaterDailyBtn;
