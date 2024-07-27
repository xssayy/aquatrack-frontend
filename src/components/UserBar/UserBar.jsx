import Icon from '../Icon/Icon';
import css from './UserBar.module.css';
import image from '../../img/avatar.png';

const UserBar = ({ onClick, isShow }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>Nadia</p>
        <img src={image} alt="avatar" className={css.avatar} />
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
