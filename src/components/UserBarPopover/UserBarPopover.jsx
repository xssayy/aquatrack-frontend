import { useState } from 'react';

import Icon from '../Icon/Icon';

import css from './UserBarPopover.module.css';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import LogOutModal from '../LogOutModal/LogOutModal';

const UserBarPopover = () => {
  const [isSettingModalOpen, setSettingModalIsOpen] = useState(false);

  function openSettingModal() {
    setModalIsOpen(true);
  }

  function closeSettingModal() {
    setModalIsOpen(false);
  }

  const [isLogOutModalOpen, setLogOutModalIsOpen] = useState(false);

  function openLogOutModal() {
    setLogOutModalIsOpen(true);
  }

  function closeLogOutModal() {
    setLogOutModalIsOpen(false);
  }

  return (
    <div className={css.userBarPopoverContainer}>
      <button type="button" onClick={openSettingModal} className={css.settings}>
        <Icon
          id={'settings'}
          width={'16px'}
          height={'16px'}
          fillColor={'#323f47'}
          className={css.iconSettings}
        />
        Setting
      </button>

      <ModalWindow
        onCloseModal={closeSettingModal}
        modalIsOpen={isSettingModalOpen}
      >
        <UserSettingsModal onCloseModal={closeSettingModal} />
      </ModalWindow>

      <button type="button" onClick={openLogOutModal} className={css.logOut}>
        <Icon
          id={'log-out'}
          width={'16px'}
          height={'16px'}
          fillColor={'rgba(50, 63, 71, 0.4)'}
          className={css.iconLogOut}
        />
        Log out
      </button>
      <LogOutModal isOpen={isLogOutModalOpen} onClose={closeLogOutModal} />
    </div>
  );
};

export default UserBarPopover;
