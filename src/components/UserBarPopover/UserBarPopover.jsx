import { useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import Icon from 'components/Icon/Icon';

import css from './UserBarPopover.module.css';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal';

const UserBarPopover = ({ closePopover }) => {
  const [modalSettingsIsOpen, setModalSettingsIsOpen] = useState(false);
  const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);

  function openModal(e) {
    if (e.target.id === 'settings_btn') {
      setModalSettingsIsOpen(true);
    } else if (e.target.id === 'log-out_btn') {
      setModalLogOutIsOpen(true);
    }
  }

  function closeModal() {
    setModalSettingsIsOpen(false);
    setModalLogOutIsOpen(false);
  }

  return (
    <div className={css.userBarPopoverContainer}>
      <button
        type="button"
        onClick={openModal}
        className={css.settings}
        id="settings_btn"
      >
        <Icon
          id={'settings'}
          width={'16px'}
          height={'16px'}
          fillColor={'#323f47'}
          className={css.iconSettings}
        />
        Setting
      </button>

      <ModalWindow onCloseModal={closeModal} modalIsOpen={modalSettingsIsOpen}>
        <UserSettingsModal onCloseModal={closeModal} />
      </ModalWindow>

      <button
        type="button"
        onClick={openModal}
        className={css.logOut}
        id="log-out_btn"
      >
        <Icon
          id={'log-out'}
          width={'16px'}
          height={'16px'}
          fillColor={'rgba(50, 63, 71, 0.4)'}
          className={css.iconLogOut}
        />
        Log out
      </button>
      <ModalWindow
        onCloseModal={closeModal}
        modalIsOpen={modalLogOutIsOpen}
      ></ModalWindow>
    </div>
  );
};

export default UserBarPopover;
