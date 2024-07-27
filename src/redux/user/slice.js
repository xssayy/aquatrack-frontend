import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './operations';

const usersInitialState = {
  user: {},
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
      //fetch contacts
      // .addCase(getUserInfo.pending, isPending)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
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

export const usersReducer = usersSlice.reducer;
