import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import style from './SingInForm.module.css';

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
  const onLogin = values => {
    reset();
    console.log(values);
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
    console.log(data);
    onLogin(data);
  };

  return (
    <div>
      {' '}
      <h1 className={style.title}>Sign In</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>Email</label>
        <input className={style.input} type="email" {...register('email')} />
        <p className={style.text}>{errors.email?.message}</p>
        <label className={style.label}>Password</label>
        <input className={style.input} type="password" {...register('password')} />
        <p className={style.text}>{errors.password?.message}</p>
        <input className={style.button} type="submit" />
      </form>
    </div>
  );
};

export default SignInForm;
