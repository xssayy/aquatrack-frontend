import css from './UserBarPopover.module.css';

const UserBarPopover = () => {
  return (
    <div className={css['user-bar-popover-container']}>
      <button type="button" className={css.settings}>
        <img src="../../img/settings.svg" alt="" /> Setting
      </button>
      <button type="button" className={css['log-out']}>
        <img src="../../img/log-out.svg" alt="" /> Log out
      </button>
    </div>
  );
};

export default UserBarPopover;
