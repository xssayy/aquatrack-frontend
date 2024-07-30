import Icon from '../Icon/Icon';
import css from './UserBarPopover.module.css';

const UserBarPopover = ({ openSettingModal, openLogOutModal }) => {
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
    </div>
  );
};

export default UserBarPopover;
