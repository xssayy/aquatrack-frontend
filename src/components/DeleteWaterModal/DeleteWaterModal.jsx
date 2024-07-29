import React, { useState } from 'react';

import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './DeleteWaterModal.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';
import { delWater } from '../../redux/water/operations';
import { useDispatch } from 'react-redux';

const DeleteWaterModal = ({ isOpen, closeModal, recordId }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setIsProcessing(true);
    //!сюди треба якось передати id запису
    //!перед цим відмалювати з БЕ
    dispatch(delWater('66a68098b7436ba2bef7846d'));
    // try {
    //   await axios.delete(`/api/water/${recordId}`);
    //   // toast.success('Record deleted successfully');
    //   // dispatch(); // Оновлення даних за допомогою Redux
    // } catch (error) {
    //   toast.error('Failed to delete record');
    // } finally {
    //   closeModal();
    //   setIsProcessing(false);
    // }
    setIsProcessing(false);
  };

  return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
      <div className={styles.modalContainer}>
        <h2 className={styles.title}>Delete entry</h2>
        <p className={styles.question}>
          Are you sure you want to delete the entry?
        </p>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={handleDelete}
            className={`${styles.commonBtn} ${styles.deleteBtn}`}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={closeModal}
            className={`${styles.commonBtn} ${styles.cancelBtn}`}
            disabled={isProcessing}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default DeleteWaterModal;
