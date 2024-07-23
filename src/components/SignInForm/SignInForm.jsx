import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.css';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 8;
const maxPasswordLength = 112;

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
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = data => {
    console.log(data);
    // dispatch(signIn(data)).then(action => {
    //   if (action.type === 'auth/signIn/fulfilled') {
    //     // Перенаправлення на TrackerPage після успішної авторизації
    //     window.location.href = '/tracker';
    //   }
    // });
    reset();
  };

  return (
    <div className={style.container}>
      {' '}
      <h1 className={style.logo}>AQUATRACK</h1>
      <h2 className={style.title}>Sign In</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <label className={style.label}>Email</label>
            <input
              className={`${style.input} ${
                errors.email ? style.errorField : ''
              }`}
              type="email"
              {...register('email')}
              placeholder="Enter your email"
            />
            <p className={style.text}>{errors.email?.message}</p>
          </li>

          <li className={style.listItem}>
            <label className={style.label}>Password</label>
            <input
              className={`${style.input} ${
                errors.email ? style.errorField : ''
              }`}
              type="password"
              {...register('password')}
              placeholder="Enter your password"
            />
            <p className={style.text}>{errors.password?.message}</p>
          </li>
        </ul>
        <input className={style.button} type="submit" value="Sing In" />
      </form>
      <p className={style.redictedLink}>Don’t have an account? </p>
      <Link to="/signup" className={style.link}>
        Sign Up
      </Link>
    </div>
  );
};

export default SignInForm;
