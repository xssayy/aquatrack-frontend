import React, { useState } from 'react';
import WaterModal from 'components/WaterModal/WaterModal';

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
      >
        click
      </button>
      <WaterModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default WelcomePage;
