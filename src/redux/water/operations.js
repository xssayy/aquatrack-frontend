import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost } from '../../service/axios';

export const getMonthly = createAsyncThunk(
  'water/monthly',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosGet(
        `water/monthly`,
        { month: date },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );
      console.log('response: ', response.water);
      return response.water;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
