import { useState } from 'react';

import { format } from 'date-fns';

import css from './MainAddWaterBtn.module.css';

import WaterModal from '../WaterModal/WaterModal';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

const MainAddWaterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconFillColor, setIconFillColor] = useState('#ffffff');
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {isLoading && <Loader type="blue" />}

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

        <WaterModal
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          closeModal={closeModal}
          isOpen={isOpen}
          type="add"
          initialData={{ amount: 50, time: `${formattedTime}` }}
        />
      </div>
    </>
  );
};

export default MainAddWaterBtn;
