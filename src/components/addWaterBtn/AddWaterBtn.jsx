import { useState } from 'react';

import Icon from 'components/shared/Icon';
// import ModalWindow from 'components/ModalWindow/ModalWindow';
// import WaterModal from '../waterModal/WaterModal.jsx';

import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddWater = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.addWaterBtnContainer}>
      <button
        className={css.addWaterBtn}
        type="button"
        onClick={handleAddWater}
      >
        <Icon
          id={'plus'}
          width={16}
          height={16}
          className={css.iconPlus}
          fillColor={'#fff'}
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