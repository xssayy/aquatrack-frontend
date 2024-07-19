import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { refreshUser, signIn, signUp } from './operations';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  // Change after backend creation
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;

        state.isSignedIn = true;
      })
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, refreshUser.pending),
        state => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, refreshUser.rejected),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
