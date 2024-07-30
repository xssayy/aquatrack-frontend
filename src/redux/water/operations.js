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
          sortBy: 'time',
        },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );
      return response.water.data;
    } catch (error) {
      if (
        error.status === 404 &&
        error.data.message === 'Entries of water not found'
      ) {
        // Обробка ситуації, коли даних немає
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
          sortBy: 'time',
        },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );

      return response.water.data;
    } catch (error) {
      if (
        error.status === 404 &&
        error.data.message === 'Entries of water not found'
      ) {
        // Обробка ситуації, коли даних немає
        return [];
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postDaily = createAsyncThunk(
  'water/postDaily',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosPost(`water`, credentials, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delWater = createAsyncThunk(
  'water/delWater',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosDel(`water/${id}`, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchWater = createAsyncThunk(
  'water/patchtWater',
  async ({ id, patchedData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosPatch(`water/${id}`, patchedData, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayWater = createAsyncThunk(
  'water/getTodayWater',
  async (_, thunkAPI) => {
    try {
      const currentTime = new Date().toISOString();

      const [chosenFullDate] = currentTime.split('T');
      const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

      const date = `${chosenYear}-${chosenMonth}-${chosenDay}`;

      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      const response = await axiosGet(
        `water/daily`,
        {
          date,
          sortOrder: 'asc',
          sortBy: 'time',
        },
        {
          Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
        }
      );

      return response.water.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
