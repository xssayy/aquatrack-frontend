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
      return response.water.data;
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

export const postDaily = createAsyncThunk(
  'water/postDaily',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;
      console.log('credentials: ', credentials);

      const response = await axiosPost(`water`, credentials, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });
      console.log('response: ', response);

      return response.data;
    } catch (error) {
      console.log('error: ', error);
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
      console.log('response: ', response);

      return response;
    } catch (error) {
      console.log('error: ', error);
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
      console.log('credentials: ', credentials);

      const response = await axiosPatch(`water/${id}`, patchedData, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });
      console.log('response: ', response);

      return response.data;
    } catch (error) {
      console.log('error: ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
