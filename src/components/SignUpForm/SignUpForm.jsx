import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './SignUpForm.module.css';
import { signIn } from 'redux/auth/operations';

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

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const onRegisterAccount = values => {
    reset();

    const { confirmPassword, ...data } = values;

    dispatch(data)
      .then(response => {
        console.log('SignUp successful:', response);
        dispatch(signIn(data));
      })
      .catch(error => {
        console.error('SignUp failed:', error);
      });
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
    console.log(data);
    onRegisterAccount(data);
  };

  return (
    <div className={css.formContainer}>
      {' '}
      <h1 className={css.logo}>AQUATRACK</h1>
      <h2 className={css.title}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <label className={css.label}>
              Email
              <input
                {...register('email')}
                className={`${css.field} ${errors.email ? css.errorField : ''}`}
                placeholder="Enter your email"
              />
            </label>
            <p className={errors.email ? css.error : ''}>
              {errors.email?.message}
            </p>
          </li>
          <li className={css.listItem}>
            <label className={css.label}>
              Password
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className={`${css.field} ${
                  errors.password ? css.errorField : ''
                }`}
                placeholder="Enter your password"
              />
              <button
                onClick={() => toggleVisibility('password')}
                className={css.toggleVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </label>
            <p className={errors.email ? css.error : ''}>
              {errors.password?.message}
            </p>
          </li>
          <li className={css.listItem}>
            <label className={css.label}>
              Repeat password
              <input
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
            </label>
            <p className={errors.email ? css.error : ''}>
              {errors.confirmPassword?.message}
            </p>
          </li>
        </ul>

        <input type="submit" className={css.button} value="Sign Up" />
      </form>
      <p className={css.redirect}>
        Already have account?{' '}
        <Link to="/signin" className={css.redirectLink}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
