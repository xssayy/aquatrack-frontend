import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPost } from '../../service/axios';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const registerResp = await axiosPost('/auth/register', credentials);
      // After successful registration, add the token to the HTTP header
      //after registration => login
      const loginResp = await axiosPost('/auth/login', credentials);
      return loginResp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosPost('/auth/login', credentials);

      // After successful login, add the token to the HTTP header

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosPost('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh-access-token',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }

      const res = await axiosPost('/auth/refresh-access-token');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
