import UserSettingsForm from 'components/UserSettingsForm/UserSettingsForm';
import style from './UserSettingsModal.module.css';

const UserSettingsModal = () => {
  return (
    <div className={style.modalContainer}>
      <h2>Setting</h2>
      <UserSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
