import { useState } from 'react';

import css from './AddWaterBtn.module.css';

import WaterModal from '../waterModal/WaterModal';

const AddWaterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddWater = () => {
    setIsOpen(true);
    console.log('Add water open modal');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className={css.addWaterBtn}
        type="button"
        onClick={handleAddWater}
      >
        + Add water
      </button>
      <WaterModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddWaterBtn;
