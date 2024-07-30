import { createSlice } from '@reduxjs/toolkit';
import {
  delWater,
  getDaily,
  getMonthly,
  getTodayWater,
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
  chosenDate: new Date().toISOString(),
  monthly: [],
  daily: [],
  today: [],
  loading: true,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,
  reducers: {
    //save chosenDay for editting or adding entries
    setChosenDate: (state, action) => {
      state.chosenDate = action.payload;
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
        state.daily = state.daily.filter(item => {
          return item._id !== action.payload;
        });
        state.today = state.daily.filter(item => {
          return item._id !== action.payload;
        });
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
      .addCase(patchWater.rejected, handleRejected)
      //getTodayWater
      .addCase(getTodayWater.pending, handlePending)
      .addCase(getTodayWater.fulfilled, (state, action) => {
        state.today = action.payload;
        state.loading = false;
      })
      .addCase(getTodayWater.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;

export const { setChosenDate } = waterSlice.actions;
