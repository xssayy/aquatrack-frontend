import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearUserData } from '../../redux/actionns/action';
import styles from './LogOutModal.module.css';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogOut = async () => {
    setIsLoggingOut(true);
    try {
      await axios.post('/api/logout');
      // dispatch(clearUserData());
      localStorage.clear();
      navigate('/home');
    } catch (error) {
      toast.error('Failed to log out');
    } finally {
      setIsLoggingOut(false);
      closeModal();
    }
  };

  return (
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
          disabled={isLoggingOut}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
