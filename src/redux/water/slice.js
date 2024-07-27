import { createSlice } from '@reduxjs/toolkit';
import { getMonthly } from './operations';

const waterInitialState = {
  monthly: {},
};

const isPending = state => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: waterInitialState,

  extraReducers: builder => {
    builder
      //fetch contacts
      // .addCase(getUserInfo.pending, isPending)
      .addCase(getMonthly.fulfilled, (state, action) => {
        state.monthly = action.payload;
      });
    // .addCase(fetchContacts.rejected, isRejected)
    // //add contact
    // .addCase(addContact.pending, isPending)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.items = [...state.items, action.payload];
    // })
    // .addCase(addContact.rejected, isRejected)
    // //delete contact
    // .addCase(deleteContact.pending, isPending)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.items = action.payload;
    // })
    // .addCase(deleteContact.rejected, isRejected)
    // //edit contact
    // .addCase(editContact.pending, isPending)
    // .addCase(editContact.fulfilled, (state, action) => {
    //   state.loading = false;

    //   state.items = state.items.map(item => {
    //     return item.id === action.payload.id
    //       ? {
    //           name: action.payload.name,
    //           id: action.payload.id,
    //           number: action.payload.number,
    //         }
    //       : item;
    //   });
    // })
    // .addCase(editContact.rejected, isRejected);
  },
});

export const waterReducer = waterSlice.reducer;
