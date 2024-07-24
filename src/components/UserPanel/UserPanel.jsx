import { useState } from 'react';
import UserBar from '../UserBar/UserBar.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';

import css from './UserPanel.module.css';

const UserPanel = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={css['user-panel-container']}>
      <p className={css.greetings}>
        Hello<span className={css['greetings-name']}>, Nadia!</span>
      </p>
      <UserBar onClick={toggleIsShow} isShow={isShow} />
      {isShow && <UserBarPopover />}
    </div>
  );
};

export default UserPanel;
