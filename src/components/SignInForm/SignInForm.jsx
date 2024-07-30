import React, { useId, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.css';
import { login } from '../../redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';
import LogoLink from '../LogoLink/LogoLink';
import Icon from '../Icon/Icon';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 8;
const maxPasswordLength = 32;

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email is required!')
    .matches(emailRegExp, 'Entered email address is not valid')
    .email('Please enter a valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailId = useId();
  const passwordId = useId();
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
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .then(() => Notify.success('Welcome back!'))
    reset();
  };

  return (
    <div className={style.signInContainer}>
      <LogoLink />
      <div className={style.formContainer}>
        <h2 className={style.title}>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputContainer}>
            <div className={style.inputItem}>
              <label htmlFor={emailId} className={style.label}>
                Email
              </label>
              <input
                id={emailId}
                className={`${style.field} ${
                  errors.email ? style.errorField : ''
                }`}
                type="email"
                {...register('email')}
                placeholder="Enter your email"
              />
              <p className={style.text}>{errors.email?.message}</p>
            </div>

            <div className={style.inputItem}>
              <label htmlFor={passwordId} className={style.label}>
                Password
              </label>
              <input
                id={passwordId}
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className={`${style.field} ${
                  errors.password ? style.errorField : ''
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => toggleVisibility('password')}
                className={style.toggleVisibility}
              >
                {showPassword ? (
                  <Icon id="eye" width={20} height={20} />
                ) : (
                  <Icon id="eye-off" width={20} height={20} />
                )}
              </button>
              <p className={style.text}>{errors.password?.message}</p>
            </div>
          </div>
          <input className={style.button} type="submit" value="Sing In" />
        </form>
        <p className={style.redirect}>
          Don’t have an account?{' '}
          <Link to="/signup" className={style.redirectLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
