import { createSlice } from '@reduxjs/toolkit';
import { getMonthly } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterInitialState = {
  monthly: {},
  daily: {},
  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,

  extraReducers: builder => {
    builder
      // getMonthly
      .addCase(getMonthly.pending, handlePending)
      .addCase(getMonthly.fulfilled, (state, action) => {
        state.monthly = action.payload;
      })
      .addCase(getMonthly.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
