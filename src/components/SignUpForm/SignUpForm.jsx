import React, { useId, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './SignUpForm.module.css';
import { signUp } from '../../redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';
import LogoLink from '../LogoLink/LogoLink';
import { useTranslation } from 'react-i18next';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 8;
const maxPasswordLength = 112;

const registrationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required!')
    .matches(emailRegExp, 'Entered email address is not valid')
    .email('Please enter a valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = data => {
    console.log({ email: data.email, password: data.password });

    dispatch(
      signUp({
        email: data.email,
        password: data.password,
      })
    )
      .unwrap()
      .then(() => Notify.success('Registration success!'))
      .catch(() => Notify.failure('User with this login already exists !'));
    reset();
  };

  const { t } = useTranslation();

  return (
    <div className={css.signUpContainer}>
      <LogoLink />
      <div className={css.formContainer}>
        <h2 className={css.title}>{t('Sign Up')}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputContainer}>
            <div className={css.inputItem}>
              <label htmlFor={emailId} className={css.label}>
                Email
              </label>
              <input
                id={emailId}
                className={`${css.field} ${errors.email ? css.errorField : ''}`}
                {...register('email')}
                placeholder="Enter your email"
              />
              <p className={errors.email ? css.error : ''}>
                {errors.email?.message}
              </p>
            </div>
            <div className={css.inputItem}>
              <label htmlFor={passwordId} className={css.label}>
                {t('Password')}
              </label>
              <input
                id={passwordId}
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className={`${css.field} ${
                  errors.password ? css.errorField : ''
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => toggleVisibility('password')}
                className={css.toggleVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <p className={errors.email ? css.error : ''}>
                {errors.password?.message}
              </p>
            </div>
            <div className={css.inputItem}>
              <label htmlFor={repeatPasswordId} className={css.label}>
                {t('Repeat password')}
              </label>
              <input
                id={repeatPasswordId}
                {...register('confirmPassword')}
                type={showPassword ? 'text' : 'password'}
                className={`${css.field} ${
                  errors.confirmPassword ? css.errorField : ''
                }`}
                placeholder="Repeat your password"
              />
              <button
                onClick={() => toggleVisibility('password')}
                className={css.toggleVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <p className={errors.email ? css.error : ''}>
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          <input type="submit" className={css.button} value="Sign Up" />
        </form>
        <p className={css.redirect}>
          Already have account?{' '}
          <Link to="/signin" className={css.redirectLink}>
            {t('Sign In')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
