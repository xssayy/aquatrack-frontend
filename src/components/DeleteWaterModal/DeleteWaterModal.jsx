import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './DeleteWaterModal.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';
import {
  delWater,
  getDaily,
  getMonthly,
  getTodayWater,
} from '../../redux/water/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectChosenDate } from '../../redux/water/selectors';
import { Notify } from 'notiflix';

const DeleteWaterModal = ({ isOpen, closeModal, id }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const chosenDate = useSelector(selectChosenDate);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setIsProcessing(true);

    try {
      //видаляємо
      await dispatch(delWater(id));
      const [chosenFullDate] = chosenDate.split('T');
      const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

      //оновлюємо список випитої за день
      const fullDate = `${chosenYear}-${chosenMonth}-${chosenDay}`;
      await dispatch(getDaily(fullDate));

      await dispatch(getTodayWater());

      //оновлюємо випиту воду за місяць
      const date = `${chosenYear}-${chosenMonth}`;
      dispatch(getMonthly(date));
    } catch (error) {
      Notify.failure('Failed to delete record');
    } finally {
      setIsProcessing(false);
      closeModal();
    }

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
