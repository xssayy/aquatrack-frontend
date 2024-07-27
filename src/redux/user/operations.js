import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost } from '../../service/axios';

// axios.defaults.baseURL = 'http://localhost:3000';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const getUserInfo = createAsyncThunk(
  'users/getUser',
  async (userId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;
      console.log('persistedToken: ', persistedToken);
      // setAuthHeader(persistedToken);
      // const response = await axios.get(`users/${userId}`);
      const response = await axiosGet(`users/${userId}`, null, {
        Authorization: `Bearer ${persistedToken}`, // Додайте заголовок Authorization, якщо потрібен
      });
      console.log('response: ', response.data);
      return response.data;
    } catch (error) {
      console.log('err: ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkApi) => {
//     try {
//       const response = await axios.post('/contacts', newContact);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkApi) => {
//     try {
//       await axios.delete(`/contacts/${id}`);
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async ({ id, name, number }, thunkApi) => {
//     try {
//       const response = await axios.patch(`/contacts/${id}`, { name, number });
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
