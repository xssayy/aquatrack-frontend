import ModalWindow from "components/ModalWindow/ModalWindow";
import UserSettingsModal from "components/UserSettingsModal/UserSettingsModal";
import { useState } from 'react';

const WelcomePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
      setModalIsOpen(true);
  }

    function closeModal() {
      setModalIsOpen(false);
    }

  return (
    <>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <ModalWindow modalIsOpen={modalIsOpen} onCloseModal={closeModal}>
        <UserSettingsModal onCloseModal={closeModal} />
      </ModalWindow>
    </>
  );
};

export default WelcomePage;
