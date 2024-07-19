import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './WaterForm.css';

const schema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required')
    .min(50, 'Minimum amount is 50ml')
    .max(500, 'Maximum amount is 500ml'),
  time: yup
    .string()
    .required('Time is required')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in hh:mm format'),
});

const QuantityStepper = ({ value, onChange }) => {
  const increase = () => onChange(value + 50);

  const decrease = () => onChange(value - 50);

  return (
    <div className="quantity-stepper">
      <button type="button" onClick={decrease} disabled={value <= 50}>
        -
      </button>
      <div className="quantity-display">{value}ml</div>
      <button type="button" onClick={increase} disabled={value >= 500}>
        +
      </button>
    </div>
  );
};

const WaterForm = ({ type, initialData, closeModal }) => {
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
      time: new Date().toTimeString().slice(0, 5),
    },
  });

  const amount = watch('amount');

  const onSubmit = async data => {
    try {
      if (type === 'add') {
        await axios.post('/api/water', data);
      } else {
        await axios.put(`/api/water/${initialData.id}`, data);
      }

      closeModal();
      // dispatch(updateWaterData()); // Оновлення з Redux
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'An error occurred');
      } else {
        toast.error('An error occurred');
      }
    }
  };

  React.useEffect(() => {
    if (errors.amount) {
      toast.error(errors.amount.message);
    }
    if (errors.time) {
      toast.error(errors.time.message);
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="water-form">
      <div className="form-group">
        <label>Enter water consumption:</label>
        <QuantityStepper
          value={amount}
          onChange={newValue => setValue('amount', newValue)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time" className="form-group-label">
          Recording time:
        </label>
        <Controller
          name="time"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
        {errors.time && <p>{errors.time.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="amount" className="form-group-label">
          Enter the value of the water used:
        </label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => <input {...field} type="number" />}
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>

      <button type="submit" className="submit-button">
        Save
      </button>
    </form>
  );
};

export default WaterForm;
