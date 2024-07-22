import React, { useState } from 'react';
import WaterModal from 'components/WaterModal/WaterModal';

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return <WaterModal isOpen={isOpen} closeModal={closeModal} />;
};

export default WelcomePage;
