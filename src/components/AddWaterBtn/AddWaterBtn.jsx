import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import css from './AddWaterBtn.module.css';

import Icon from 'components/shared/Icon';
import WaterModal from 'components/WaterModal/WaterModal';
import Loader from '../Loader/Loader';

const AddWaterBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isLoading && <Loader type="blue" />}

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
            <WaterModal isLoading={isLoading} setIsLoading={setIsLoading} />
          </ModalWindow>
        )}
      </div>
    </>
  );
};

export default AddWaterBtn;
