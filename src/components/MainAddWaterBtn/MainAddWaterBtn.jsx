import { useState } from 'react';

import Icon from 'components/Icon/Icon.jsx';
import { format } from 'date-fns';

import css from './AddWaterBtn.module.css';
import WaterModal from 'components/WaterModal/WaterModal';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const MainAddWaterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconFillColor, setIconFillColor] = useState('#ffffff');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIconFillColor('#9be1a0');
  };

  const handleMouseLeave = () => {
    setIconFillColor('#ffffff');
  };

  const currentDate = new Date(); // Поточна дата
  const formatTime = date => {
    return format(date, 'HH:mm');
  };
  const formattedTime = formatTime(currentDate);

  return (
    <div className={css.addWaterBtnContainer}>
      <button
        className={css.addWaterBtn}
        type="button"
        onClick={openModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon
          id={'plus'}
          width={16}
          height={16}
          className={css.iconPlus}
          fillColor={iconFillColor}
        />
        Add water
      </button>

      <ModalWindow onCloseModal={closeModal} modalIsOpen={isOpen}>
        <WaterModal
          type="add"
          initialData={{ amount: 50, time: `${formattedTime}` }}
        />
      </ModalWindow>
    </div>
  );
};

export default MainAddWaterBtn;