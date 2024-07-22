import { useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import Icon from 'components/shared/Icon';

import css from './UserBarPopover.module.css';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal';

const UserBarPopover = ({ closePopover }) => {
  const [modalSettingsIsOpen, setModalSettingsIsOpen] = useState(false);
  const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);

  function openModal(e) {
    if (e.target.id === 'settings') {
      setModalSettingsIsOpen(true);
    } else if (e.target.id === 'log-out') {
      setModalLogOutIsOpen(true);
    }
  }

  function closeModal() {
    setModalSettingsIsOpen(false);
    setModalLogOutIsOpen(false);
  }

  return (
    <div className={css['user-bar-popover-container']}>
      <button
        type="button"
        onClick={openModal}
        className={css.settings}
        id={'settings'}
      >
        <Icon
          id={'settings'}
          width={'16px'}
          height={'16px'}
          fillColor={'#323f47'}
          className={css['icon-setting']}
        />
        Setting
      </button>
      <ModalWindow modalIsOpen={modalSettingsIsOpen} onCloseModal={closeModal}>
        <UserSettingsModal />
      </ModalWindow>
      <button
        type="button"
        onClick={openModal}
        className={css['log-out']}
        id={'log-out'}
      >
        <Icon
          id={'log-out'}
          width={'16px'}
          height={'16px'}
          fillColor={'rgba(50, 63, 71, 0.4)'}
          className={css['icon-log-out']}
        />
        Log out
      </button>
      <ModalWindow
        modalIsOpen={modalLogOutIsOpen}
        onCloseModal={closeModal}
      ></ModalWindow>
    </div>
  );
};

export default UserBarPopover;
