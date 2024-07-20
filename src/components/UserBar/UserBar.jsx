import clsx from 'clsx';
import css from './UserBar.module.css';

const UserBar = ({ onClick, isShow }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>Nadia</p>
        <img src="./Ellipse14.png" alt="" className={css.avatar} />
        <svg className={clsx(isShow && css['arrow-up'], css['arrow-down'])}>
          <use href="sprite.svg#icon-arrow"></use>
        </svg>
      </button>
    </>
  );
};

export default UserBar;
