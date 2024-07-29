import ModalWindow from '../ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import styles from './LogOutModal.module.css';
import { logOut } from '../../redux/auth/operations';
import { useTranslation } from 'react-i18next';

const LogOutModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogOut = async () => {
    dispatch(logOut());
    closeModal();
  };

  return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
      <div className={styles.modalContainer}>
        <h2 className={styles.title}>{t('Modal.Confirm modal.Log Out')}</h2>
        <p className={styles.question}>
          {t('Modal.Confirm modal.Do you really want to leave?')}
        </p>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={handleLogOut}
            className={`${styles.commonBtn} ${styles.deleteBtn}`}
          >
            {t('Modal.Confirm modal.Log Out')}
          </button>
          <button
            type="button"
            onClick={closeModal}
            className={`${styles.commonBtn} ${styles.cancelBtn}`}
          >
            {t('General vars.Cancel')}
          </button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default LogOutModal;
