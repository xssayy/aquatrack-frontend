import { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import style from './UserSettingsForm.module.css';
import Icon from 'components/shared/Icon';
import avatar from '../../img/avatar.png';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
  const [avatarUrl, setAvatarUrl] = useState(avatar);
  const [waterDailyNorma, setWaterDailyNorma] = useState(1.8);

  const {
    register,
    handleSubmit,
    watch,
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

  const weight = watch('weight');
  const sportHours = watch('sportHours');
  const gender = watch('gender');

  useEffect(() => {
    if (weight >= 1 && sportHours >= 0) {
      const waterNorma =
        gender === 'woman'
          ? weight * 0.03 + sportHours * 0.4
          : weight * 0.04 + sportHours * 0.6;
      setWaterDailyNorma(waterNorma.toFixed(2));
    }
  }, [weight, sportHours, gender]);

  const handlePhotoChange = event => {
    const file = event.target.files[0];
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  };


  const onSubmit = data => {
    console.log(data);
    // JSON.stringify(data);
  };

  return (
    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.upperContainer}>
        <div className={style.imgContainer}>
          <img className={style.userImg} src={avatarUrl} alt="avatar"></img>
        </div>
        <label className={style.imgLabel} htmlFor={idPhoto}>
          <Icon id="upload" width="18" height="18" /> Upload a photo
        </label>
        <input
          className={style.imgInput}
          id={idPhoto}
          type="file"
          {...register('photo')}
          onChange={handlePhotoChange}
        />
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>
      <PerfectScrollbar className={style.scrollContainer}>
        <div className={style.settingContainer}>
          <div>
            <h3 className={style.radioTitle}>Your gender identity</h3>
            <div className={style.radioContainer}>
              <div className={style.inputRadioContainer}>
                <input
                  className={style.inputRadio}
                  id={idGenderWoman}
                  type="radio"
                  {...register('gender')}
                  value="woman"
                />
                <label className={style.labelRadio} htmlFor={idGenderWoman}>
                  Woman
                </label>
              </div>
              <div className={style.inputRadioContainer}>
                <input
                  className={style.inputRadio}
                  id={idGenderMan}
                  type="radio"
                  {...register('gender')}
                  value="man"
                />
                <label className={style.labelRadio} htmlFor={idGenderMan}>
                  Man
                </label>
              </div>
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>
          </div>

          <div className={style.userInfoContainer}>
            <div className={style.inputContainer}>
              <label className={style.labelTitle} htmlFor={idName}>
                Your name
              </label>
              <input
                className={style.inputElem}
                type="text"
                id={idName}
                {...register('name')}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className={style.inputContainer}>
              <label className={style.labelTitle} htmlFor={idEmail}>
                Email
              </label>
              <input
                className={style.inputElem}
                id={idEmail}
                type="email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className={style.dailyNormaContainer}>
            <h3 className={style.labelTitle}>My daily norma</h3>
            <div className={style.dailyNormaFormulaContainer}>
              <div>
                <p className={style.dailyNormaGender}>For woman:</p>
                <p className={style.dailyNormaFormula}>V=(M*0,03) + (T*0,4)</p>
              </div>
              <div>
                <p className={style.dailyNormaGender}>For man:</p>
                <p className={style.dailyNormaFormula}>V=(M*0,04) + (T*0,6)</p>
              </div>
            </div>
            <div className={style.dailyNormaDescriptionContainer}>
              <p className={style.dailyNormaDescription}>
                <span className={style.dailyNormaDescriptionSpan}>*</span> V is
                the volume of the water norm in liters per day, M is your body
                weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </p>
            </div>
            <p className={style.formaText}>
              <span className={style.dailyNormaWarningSpan}>!</span> Active time
              in hours
            </p>
          </div>

          <div className={style.userInfoContainer}>
            <div className={style.inputContainer}>
              <label className={style.formaText} htmlFor={idWeight}>
                Your weight in kilograms:
              </label>
              <input
                className={style.inputElem}
                id={idWeight}
                type="number"
                {...register('weight')}
              />
              {errors.weight && <p>{errors.weight.message}</p>}
            </div>

            <div className={style.inputContainer}>
              <label className={style.formaText} htmlFor={idSportHours}>
                The time of active participation in sports:
              </label>
              <input
                className={style.inputElem}
                id={idSportHours}
                type="number"
                {...register('sportHours')}
              />
              {errors.sportHours && <p>{errors.sportHours.message}</p>}
            </div>
          </div>

          <div className={style.userInfoContainer}>
            <div className={style.inputContainer}>
              <p className={style.formaText}>
                The required amount of water in liters per day:
              </p>
              <p className={style.dailyNormaFormula}>{waterDailyNorma} L</p>
            </div>

            <div className={style.inputContainer}>
              <label className={style.labelTitle} htmlFor={idWaterAmount}>
                Write down how much water you will drink:
              </label>
              <input
                className={style.inputElem}
                type="number"
                step="0.1"
                id={idWaterAmount}
                {...register('waterAmount')}
              />
              {errors.waterAmount && <p>{errors.waterAmount.message}</p>}
            </div>
          </div>

          <button className={style.formButton} type="submit">
            Save
          </button>
        </div>
      </PerfectScrollbar>
    </form>
  );
};

export default UserSettingsForm;
