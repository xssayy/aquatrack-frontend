import { useState } from 'react';
import UserBar from '../UserBar/UserBar.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import css from './UserPanel.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/selectors.js';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import LogOutModal from '../LogOutModal/LogOutModal.jsx';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal.jsx';

const UserPanel = () => {
  const userInfo = useSelector(selectUser);
  const [isShow, setIsShow] = useState(false);
  const [isSettingModalOpen, setSettingModalIsOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalIsOpen] = useState(false);

  const toggleIsShow = () => {
    setIsShow(!isShow);
  };

  function openSettingModal() {
    setSettingModalIsOpen(true);
    setIsShow(false);
  }

  function closeSettingModal() {
    setSettingModalIsOpen(false);
  }

  function openLogOutModal() {
    setLogOutModalIsOpen(true);
    setIsShow(false);
  }

  function closeLogOutModal() {
    setLogOutModalIsOpen(false);
  }

  return (
    <div className={css.userPanelContainer}>
      <p className={css.greetings}>
        Hello
        <span className={css.greetingsName}>, {userInfo.name || 'User'}!</span>
      </p>
      <UserBar onClick={toggleIsShow} isShow={isShow} />
      {isShow && (
        <UserBarPopover
          openSettingModal={openSettingModal}
          openLogOutModal={openLogOutModal}
        />
      )}
      <ModalWindow
        onCloseModal={closeSettingModal}
        modalIsOpen={isSettingModalOpen}
      >
        <UserSettingsModal onCloseModal={closeSettingModal} />
      </ModalWindow>

      <LogOutModal isOpen={isLogOutModalOpen} closeModal={closeLogOutModal} />
    </div>
  );
};

export default UserPanel;
