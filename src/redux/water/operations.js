import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost, axiosPatch, axiosDel } from '../../service/axios';

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
      return response.water;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
