import Icon from '../Icon/Icon';
import css from './UserBar.module.css';
import avatar from '../../img/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/selectors';

const UserBar = ({ onClick, isShow }) => {
  const userInfo = useSelector(selectUser);



  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <p>{userInfo.name || 'User'}</p>
        <img
          src={userInfo.photo || avatar}
          alt="avatar"
          className={css.avatar}
        />
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
