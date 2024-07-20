import css from './UserBar.module.css';

const UserBar = ({ onClick, isShow }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>Nadia</p>
        <img src="./Ellipse14.png" alt="" className={css.avatar} />
        {isShow ? (
          <svg>
            <use href="sprite.svg#идентификатор-символа"></use>
          </svg>
        ) : (
          <img src="../../img/chevron-down.svg" alt="" />
        )}
      </button>
    </>
  );
};

export default UserBar;
