import React from 'react';
import WaterForm from '../WaterForm/WaterForm';
import ModalWindow from '../ModalWindow/ModalWindow';

const WaterModal = ({ type, initialData, isOpen, closeModal }) => {
  const title =
    type === 'add' ? 'Add Water' : 'Edit the entered amount of water';
  const subtitle = type === 'add' ? 'Choose a value' : 'Correct entered data:';

  return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
      <div className="water-modal-header">
        <h2 className="water-modal-title">{title}</h2>
        <h3 className="water-modal-subtitle">{subtitle}</h3>
      </div>
      <WaterForm
        type={type}
        initialData={initialData}
        closeModal={closeModal}
      />
    </ModalWindow>
  );
};

export default WaterModal;
