import React, { useEffect, useId } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../WaterForm/WaterForm.module.css';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMonthly,
  getTodayWater,
  patchWater,
  postDaily,
} from '../../redux/water/operations';
import { selectChosenDate } from '../../redux/water/selectors';

const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required')
    .min(50, 'Minimum amount is 50ml')
    .max(5000, 'Maximum amount is 5000ml'),
  time: yup
    .string()
    .required('Time is required')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in hh:mm format'),
});

const QuantityStepper = ({ value, onChange }) => {
  const increase = () => onChange(Number(value) + 50);
  const decrease = () => onChange(Number(value) - 50);

  return (
    <div className={styles.quantityStepperContainer}>
      <label className={styles.quantityAmount}>Amount of water:</label>
      <div className={styles.quantityStepper}>
        <button type="button" onClick={decrease} disabled={value <= 50}>
          <Icon id="minus" width={15} height={15} />
        </button>
        <div className={styles.quantityDisplay}>{value}ml</div>
        <button type="button" onClick={increase} disabled={value >= 5000}>
          <Icon id="plus" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

const formatTime = value => {
  const cleaned = value.replace(/\D/g, '');
  console.log(cleaned);
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}:${cleaned.slice(2)}`;
  console.log(`${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`);
  return `${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`;
};

const WaterForm = ({ type, initialData, closeModal, id }) => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectChosenDate);
  const timeId = useId();
  const amountId = useId();

  useEffect(() => {
    const [chosenFullDate] = chosenDate.split('T');
    const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

    const date = `${chosenYear}-${chosenMonth}`;
    dispatch(getMonthly(date));
  }),
    [chosenDate, dispatch];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData || {
      amount: 50,
      time: new Date()
        .toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
        .padStart(5, '0'),
    },
  });

  const amount = watch('amount');

  const onSubmit = async data => {
    const [datePart] = chosenDate.split('T');
    // Встановлюємо новий час зберігаючи дату
    const newDateISO = `${datePart}T${data.time}:00Z`;
    console.log(newDateISO);
    try {
      if (type === 'add') {
        await dispatch(postDaily({ ...data, time: newDateISO }));
      } else if (type === 'edit') {
        await dispatch(
          patchWater({
            id,
            patchedData: { ...data, time: newDateISO },
          })
        );
      }
      await dispatch(getTodayWater());
    } catch (error) {
      Notify.failure(`Failed to ${type} record`);
    } finally {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.waterForm}>
      <div className={styles.formGroup}>
        <QuantityStepper
          value={amount}
          onChange={newValue => setValue('amount', newValue)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={timeId} className={styles.quantityLabel}>
          Recording time:
        </label>
        <div className={styles.customTimePicker}>
          <input
            type="time"
            id={timeId}
            className={`${styles.inputField} ${
              errors.time ? styles.error : ''
            }`}
            {...register('time', {
              onChange: e => {
                e.target.value = formatTime(e.target.value);
              },
            })}
            placeholder="hh:mm"
          />
        </div>
        {errors.time && (
          <p className={styles.errorMessage}>{errors.time.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor={amountId} className={styles.formGroupLabel}>
          Enter the value of the water used:
        </label>
        <input
          type="number"
          id={amountId}
          className={`${styles.inputField} ${
            errors.amount ? styles.error : ''
          }`}
          {...register('amount')}
        />
        {errors.amount && (
          <p className={styles.errorMessage}>{errors.amount.message}</p>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Save
      </button>
    </form>
  );
};

export default WaterForm;
