import { useState } from 'react';

import Icon from '../Icon/Icon';

import css from './UserBarPopover.module.css';

const UserBarPopover = ({ openModal }) => {
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
    </div>
  );
};

export default UserBarPopover;
