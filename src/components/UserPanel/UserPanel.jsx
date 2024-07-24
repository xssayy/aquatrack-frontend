import { useState } from 'react';

import UserBar from '../UserBar/UserBar.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import ModalWindow from 'components/ModalWindow/ModalWindow.jsx';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal.jsx';

import css from './UserPanel.module.css';

const UserPanel = () => {
  const [isShow, setIsShow] = useState(false);
  const [modalSettingsIsOpen, setModalSettingsIsOpen] = useState(false);
  const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);

  function openModal(e) {
    if (e.target.id === 'settings_btn') {
      setModalSettingsIsOpen(true);
      toggleIsShow();
    } else if (e.target.id === 'log-out_btn') {
      setModalLogOutIsOpen(true);
      toggleIsShow();
    }
  }

  function closeModal() {
    setModalSettingsIsOpen(false);
    setModalLogOutIsOpen(false);
  }

  const toggleIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={css['user-panel-container']}>
      <p className={css.greetings}>
        Hello<span className={css['greetings-name']}>, Nadia!</span>
      </p>
      <UserBar onClick={toggleIsShow} isShow={isShow} />
      {isShow && <UserBarPopover openModal={openModal} />}

      <ModalWindow onCloseModal={closeModal} modalIsOpen={modalSettingsIsOpen}>
        <UserSettingsModal onCloseModal={closeModal} />
      </ModalWindow>
      <ModalWindow
        onCloseModal={closeModal}
        modalIsOpen={modalLogOutIsOpen}
      ></ModalWindow>
    </div>
  );
};

export default UserPanel;
