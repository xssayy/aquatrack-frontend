import UserSettingsForm from 'components/UserSettingsForm/UserSettingsForm';
import style from './UserSettingsModal.module.css';

const UserSettingsModal = () => {
  return (
    <div className={style.settingContainer}>
      <h2 className={style.settingTitle}>Setting</h2>
      <UserSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
