import { useTranslation } from 'react-i18next';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import style from './UserSettingsModal.module.css';

const UserSettingsModal = ({ onCloseModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.settingContainer}>
        <h2 className={style.settingTitle}>
          {t('Tracker page.Water detailed info.Setting')}
        </h2>
        <UserSettingsForm onCloseModal={onCloseModal} />
      </div>
    </>
  );
};

export default UserSettingsModal;
