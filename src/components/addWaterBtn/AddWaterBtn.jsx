import { useState } from 'react';

import Icon from 'components/shared/Icon';

import css from './AddWaterBtn.module.css';

// import WaterModal from '../waterModal/WaterModal.jsx';

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
      {/* <WaterModal isOpen={isOpen} closeModal={closeModal} /> */}
    </div>
  );
};

export default AddWaterBtn;
