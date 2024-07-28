import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost, axiosPatch, axiosDel } from '../../service/axios';

export const getMonthly = createAsyncThunk(
  'water/monthly',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;
      // sortOrder=asc&sortBy=_id
      const response = await axiosGet(
        `water/monthly`,
        {
          month: date,
          sortOrder: 'asc',
          sortBy: '_id',
        },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );
      return response.water;
    } catch (error) {
      console.log(error);
      if (
        error.status === 404 &&
        error.data.message === 'Entries of water not found'
      ) {
        // Обробка ситуації, коли даних немає
        console.log('No water for the specified day');
        return [];
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDaily = createAsyncThunk(
  'water/getDaily',
  async (fullDate, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosGet(
        `water/daily`,
        {
          date: fullDate,
          sortOrder: 'asc',
          sortBy: '_id',
        },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );

      console.log(response.water.data);
      return response.water.data;
    } catch (error) {
      if (
        error.status === 404 &&
        error.data.message === 'Entries of water not found'
      ) {
        // Обробка ситуації, коли даних немає
        console.log('No water for the specified day');
        return [];
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
