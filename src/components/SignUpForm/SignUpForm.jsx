import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const onRegisterAccount = values => {
    reset();
    console.log(values);
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
    <div>
      {' '}
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <label>Confirm Password</label>
        <input {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
