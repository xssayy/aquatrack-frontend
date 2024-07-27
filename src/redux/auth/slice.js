import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // userId: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    //додати пендінг і реджеткд до всіх + універсальний isPending
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        // state.userId = action.payload.userId;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        // state.userId = action.payload.userId;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        // state.userId = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
