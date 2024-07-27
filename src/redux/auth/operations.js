import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPost } from '../../service/axios';

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'https://aqua-track-backend.onrender.com';

// const api = axios.create({
//   baseURL: 'http://localhost:3000', // Замініть на ваш базовий URL
//   // baseURL: 'https://aqua-track-backend.onrender.com', // Замініть на ваш базовий URL
//   withCredentials: true, // Дозволити передачу файлів cookie
// });

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // const registerResp = await api.post('/auth/register', credentials);
      const registerResp = await axiosPost('/auth/register', credentials);
      // After successful registration, add the token to the HTTP header
      //after registration => login
      const loginResp = await axiosPost('/auth/login', credentials);
      // const loginResp = await api.post('/auth/login', credentials);
      setAuthHeader(loginResp.data.accessToken);
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
      // const res = await axios.post('/auth/login', credentials);
      const res = await axiosPost('/auth/login', credentials);

      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.accessToken);

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
    // await axios.post('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
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
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axiosPost('/auth/refresh-access-token');
      console.log('res.data', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
