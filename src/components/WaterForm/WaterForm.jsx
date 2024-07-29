import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import styles from '../WaterForm/WaterForm.module.css';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { getMonthly, postDaily } from '../../redux/water/operations';

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
  const increase = () => onChange(value + 50);
  const decrease = () => onChange(value - 50);

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
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}:${cleaned.slice(2)}`;
  return `${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`;
};

const WaterForm = ({
  type,
  initialData,
  closeModal,
  chosenDate,
  setChosenDate,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const year = new Date(chosenDate).getFullYear();
    let month = new Date(chosenDate).getMonth() + 1;

    //приводи місяць до формату "06" замість "6 "
    month = month < 10 ? `0${month}` : month;
    const date = `${year}-${month}`;
    dispatch(getMonthly(date));
  }),
    [dispatch];

  const {
    control,
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
    // console.log('Submitting data:', data);
    // const [datePart] = chosenDate.split('T');
    // Встановлюємо новий час зберігаючи дату
    // const newDateISO = `${datePart}T${data.time}:00Z`;
    //тут має бути якась перевірки чи це post чи patch
    // створюємо POST
    // dispatch(postDaily({ ...data, time: newDateISO }));
    //патчимо
    // dispatch(
    //   patchDaily({
    //     id: '66a6da2f398f0570d3bd3d2b',
    //     patchedData: { ...data, time: newDateISO },
    //   })
    // );
    // try {
    //   if (type === 'add') {
    //     await axios.post('/api/water', data);
    //   } else {
    //     await axios.put(`/api/water/${initialData.id}`, data);
    //   }
    //   closeModal();
    // } catch (error) {
    //   if (error.response && error.response.data) {
    //     toast.error(error.response.data.message || 'An error occurred');
    //   } else {
    //     toast.error('An error occurred');
    //   }
    // }
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
        <label htmlFor="time" className={styles.quantityLabel}>
          Recording time:
        </label>
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <div className={styles.customTimePicker}>
              <input
                type="text"
                className={`${styles.inputField} ${
                  errors.time ? styles.error : ''
                }`}
                {...field}
                value={field.value || ''}
                onChange={e => {
                  const formattedTime = formatTime(e.target.value);
                  field.onChange(formattedTime);
                }}
                placeholder="hh:mm"
              />
            </div>
          )}
        />
        {errors.time && (
          <p className={styles.errorMessage}>{errors.time.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="amount" className={styles.formGroupLabel}>
          Enter the value of the water used:
        </label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              className={`${styles.inputField} ${
                errors.amount ? styles.error : ''
              }`}
              {...field}
            />
          )}
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
