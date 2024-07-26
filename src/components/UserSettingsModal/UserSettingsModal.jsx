import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import style from './UserSettingsModal.module.css';

const UserSettingsModal = ({ onCloseModal }) => {
  return (
    <>
      <div className={style.settingContainer}>
        <h2 className={style.settingTitle}>Setting</h2>
        <UserSettingsForm onCloseModal={onCloseModal} />
      </div>
    </>
  );
};

export default UserSettingsModal;
