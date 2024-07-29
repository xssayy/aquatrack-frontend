import React from 'react';
import WaterForm from '../WaterForm/WaterForm';
import ModalWindow from '../ModalWindow/ModalWindow';
import styles from '../WaterModal/WaterModal.module.css';

const WaterModal = ({ type, initialData, isOpen, closeModal, id }) => {
  const title =
    type === 'add' ? 'Add Water' : `Edit the entered amount <br /> of water`;
  const subtitle = type === 'add' ? 'Choose a value:' : 'Correct entered data:';

  return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
      <div className={styles.waterModalContainer}>
        <div className={styles.waterModalHeader}>
          <h2
            className={styles.waterModalTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <h3 className={styles.waterModalSubtitle}>{subtitle}</h3>
        </div>
        <WaterForm
          type={type}
          initialData={initialData}
          closeModal={closeModal}
          id={id}
        />
      </div>
    </ModalWindow>
  );
};

export default WaterModal;
