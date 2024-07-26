import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import css from './AddWaterBtn.module.css';

import Icon from 'components/shared/Icon';
import WaterModal from 'components/WaterModal/WaterModal';

const AddWaterBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.addBtn}>
      <button className={css.btn} onClick={handleOpenModal}>
        <Icon id="plus" width="15" height="15" />
      </button>
      <p className={css.text}>Add water</p>
      {modalIsOpen && (
        <ModalWindow
          onCloseModal={handleCloseModal}
          modalIsOpen={handleOpenModal}
        >
          <WaterModal />
        </ModalWindow>
      )}
    </div>
  );
};

export default AddWaterBtn;
