import ModalWindow from '../ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import styles from './LogOutModal.module.css';
import { logOut } from '../../redux/auth/operations';

const LogOutModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logOut());
    closeModal();
  };

  return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
      <div className={styles.modalContainer}>
        <h2 className={styles.title}>Log Out</h2>
        <p className={styles.question}>Do you really want to leave?</p>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={handleLogOut}
            className={`${styles.commonBtn} ${styles.deleteBtn}`}
          >
            Log Out
          </button>
          <button
            type="button"
            onClick={closeModal}
            className={`${styles.commonBtn} ${styles.cancelBtn}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default LogOutModal;
