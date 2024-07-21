import Icon from 'components/shared/Icon';

import css from './UserBar.module.css';

const UserBar = ({ onClick, isShow }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>Nadia</p>
        <img src="./Ellipse14.png" alt="" className={css.avatar} />
        {isShow ? (
          <Icon
            id={'arrow'}
            width={'20px'}
            height={'20px'}
            fillColor={'#ffffff'}
            className={css['arrow-up']}
          />
        ) : (
          <Icon
            id={'arrow'}
            width={'20px'}
            height={'20px'}
            fillColor={'#ffffff'}
          />
        )}
      </button>
    </>
  );
};

export default UserBar;
