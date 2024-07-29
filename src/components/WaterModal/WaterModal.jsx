import React from 'react';
import WaterForm from '../WaterForm/WaterForm';
import ModalWindow from '../ModalWindow/ModalWindow';
import styles from '../WaterModal/WaterModal.module.css';
import { useTranslation } from 'react-i18next';

const WaterModal = ({ type, initialData, isOpen, closeModal, id }) => {
  const { t } = useTranslation();
  const title =
    type === 'add'
      ? t('Tracker page.Water main info.Add water')
      : t('Modal.Edit water modal.Edit the entered amount of water'); //`Edit the entered amount <br /> of water`;
  const subtitle =
    type === 'add'
      ? t('Modal.Edit water modal.Choose a value')
      : t('Modal.Edit water modal.Correct entered data');

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
