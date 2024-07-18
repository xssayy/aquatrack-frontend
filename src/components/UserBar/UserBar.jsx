import css from "./UserBar.module.css";

const UserBar = ({ onClick, isShow }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>Nadia</p>
        <img src="../../../public/Ellipse 14.png" alt="" />
        {isShow ? (
          <img src="../../../public/chevron-up.svg" alt="" />
        ) : (
          <img src="../../../public/chevron-down.svg" alt="" />
        )}
      </button>
    </>
  );
};

export default UserBar;
