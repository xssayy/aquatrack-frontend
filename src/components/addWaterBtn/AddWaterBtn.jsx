import { useState } from 'react';

import Icon from 'components/shared/Icon.jsx';
// import ModalWindow from 'components/ModalWindow/ModalWindow.jsx';
// import WaterModal from '../waterModal/WaterModal.jsx';

import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconFillColor, setIconFillColor] = useState('#ffffff');

  const handleAddWater = () => {
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

  return (
    <div className={css.addWaterBtnContainer}>
      <button
        className={css.addWaterBtn}
        type="button"
        onClick={handleAddWater}
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
      {/* <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
        <WaterModal />
      </ModalWindow> */}
    </div>
  );
};

export default AddWaterBtn;
