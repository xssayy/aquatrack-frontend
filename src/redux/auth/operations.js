import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = '';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signIn', credentials);
      setAuthHeader(res.data.token);
      Notify.success('Welcome back!');
      return res.data;
    } catch (error) {
      Notify.error('Wrong password or email. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

