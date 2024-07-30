import { useState } from 'react';
import UserBar from '../UserBar/UserBar.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import css from './UserPanel.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/selectors.js';
import { useTranslation } from 'react-i18next';

const UserPanel = () => {
  const userInfo = useSelector(selectUser);
  const [isShow, setIsShow] = useState(false);
  const [modalSettingsIsOpen, setModalSettingsIsOpen] = useState(false);
  const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={css.userPanelContainer}>
      <p className={css.greetings}>
        {t('Tracker page.Water detailed info.Hello')}
        <span className={css.greetingsName}>, {userInfo.name || 'User'}!</span>
      </p>
      <UserBar onClick={toggleIsShow} isShow={isShow} />
      {isShow && <UserBarPopover />}
    </div>
  );
};

export default UserPanel;
