import { createSlice } from '@reduxjs/toolkit';
import {
  delWater,
  getDaily,
  getMonthly,
  patchWater,
  postDaily,
} from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterInitialState = {
  chosenDay: new Date().toISOString(),
  monthly: [],
  daily: [],
  loading: true,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,
  reducers: {
    //save chosenDay for editting or adding entries
    setChosenDay: (state, action) => {
      state.chosenDay = action.payload;
    },
  },

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
      .addCase(getDaily.rejected, handleRejected)
      //postDaily
      .addCase(postDaily.pending, handlePending)
      .addCase(postDaily.fulfilled, (state, action) => {
        state.daily = [...state.daily, action.payload];
        state.loading = false;
      })
      .addCase(postDaily.rejected, handleRejected)
      //deleteWater
      .addCase(delWater.pending, handlePending)
      .addCase(delWater.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(delWater.rejected, handleRejected)
      //patchWater
      .addCase(patchWater.pending, handlePending)
      .addCase(patchWater.fulfilled, (state, action) => {
        state.loading = false;
        state.daily = state.daily.map(item => {
          if (item._id === action.payload._id) {
            return { ...item, ...action.payload };
          }
          return item;
        });
      })
      .addCase(patchWater.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;

export const { setChosenDay } = waterSlice.actions;
