import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const initialState = {
  photo: '',
  gender: 'woman',
  name: 'User',
  email: '',
  weight: 0,
  sportHours: 0,
  waterAmount: 0,
};

const schemaYup = Yup.object().shape({
  photo: Yup.mixed(),
  gender: Yup.string().oneOf(['woman', 'man']),
  name: Yup.string()
    .trim()
    .min(2, 'Minimal 2 symbols!')
    .max(30, 'Max 30 symbols!'),
  email: Yup.string().trim().email('Invalid email format'),
  weight: Yup.number()
    .min(0, 'Kilograms cannot be negative')
    .max(300, 'Max 300 kilograms!'),
  sportHours: Yup.number()
    .min(0, 'Sport hours cannot be negative')
    .max(24, 'Max 24 hours'),
  waterAmount: Yup.number()
    .min(0, 'Water amount must be a positive number')
    .max(16, 'Drinking more than 16 liters of water per day is dangerous'),
});

const UserSettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(schemaYup),
  });

  const idPhoto = useId();
  const idGenderWoman = useId();
  const idGenderMan = useId();
  const idName = useId();
  const idEmail = useId();
  const idWeight = useId();
  const idSportHours = useId();
  const idWaterAmount = useId();

  const onSubmit = data => {
    console.log(data);
    // JSON.stringify(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img
          src="https://illustrators.ru/uploads/product/image/16445/%D0%BC%D0%BE%D0%B9_%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C_1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C_1.png"
          alt="avatar"
        ></img>
        <label htmlFor={idPhoto}>Upload a photo</label>
        <input id={idPhoto} type="file" {...register('photo')} />
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>

      <div>
        <h3>Your gender identity</h3>
        <label htmlFor={idGenderWoman}>Woman</label>
        <input
          id={idGenderWoman}
          type="radio"
          {...register('gender')}
          value="woman"
        />
        <label htmlFor={idGenderMan}>Man</label>
        <input
          id={idGenderMan}
          type="radio"
          {...register('gender')}
          value="man"
        />
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      <div>
        <label htmlFor={idName}>Your name</label>
        <input type="text" id={idName} {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor={idEmail}>Email</label>
        <input id={idEmail} type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <h3>My daily norma</h3>
        <div>
          <h4>For woman:</h4>
          <p>V=(M*0,03) + (T*0,4)</p>
        </div>
        <div>
          <h4>For man:</h4>
          <p>V=(M*0,04) + (T*0,6)</p>
        </div>
        <div>
          <p>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
          </p>
        </div>
        <p>! Active time in hours</p>
      </div>

      <div>
        <label htmlFor={idWeight}>Your weight in kilograms:</label>
        <input id={idWeight} type="number" {...register('weight')} />
        {errors.weight && <p>{errors.weight.message}</p>}
      </div>

      <div>
        <label htmlFor={idSportHours}>
          The time of active participation in sports:
        </label>
        <input id={idSportHours} type="number" {...register('sportHours')} />
        {errors.sportHours && <p>{errors.sportHours.message}</p>}
      </div>

      <div>
        <p>The required amount of water in liters per day:</p>
        <p>1.8 L</p>
      </div>

      <div>
        <label htmlFor={idWaterAmount}>
          Write down how much water you will drink:
        </label>
        <input
          type="number"
          step="0.1"
          id={idWaterAmount}
          {...register('waterAmount')}
        />
        {errors.waterAmount && <p>{errors.waterAmount.message}</p>}
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default UserSettingsForm;
