import { createSlice } from '@reduxjs/toolkit';
import { getDaily, getMonthly } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterInitialState = {
  monthly: [],
  daily: [],
  loading: true,
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
        state.loading = false;
      })
      .addCase(getMonthly.rejected, handleRejected)
      //getDaily
      .addCase(getDaily.pending, handlePending)
      .addCase(getDaily.fulfilled, (state, action) => {
        state.daily = action.payload;
        state.loading = false;
      })
      .addCase(getDaily.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
