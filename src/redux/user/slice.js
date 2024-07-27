import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersCount, getUserInfo, patchUserInfo } from './operations';

const usersInitialState = {
  user: {},
  usersCount: null,
  loading: false,
  error: false,
};

const isPending = state => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,

  extraReducers: builder => {
    builder
      // .addCase(getUserInfo.pending, isPending)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getAllUsersCount.fulfilled, (state, action) => {
        state.usersCount = action.payload;
      })
      .addCase(patchUserInfo.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      });
  },
});

export const usersReducer = usersSlice.reducer;
