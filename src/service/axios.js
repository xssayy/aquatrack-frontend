import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://aqua-track-backend.onrender.com',
  // baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const request = async (
  method,
  url,
  data = null,
  params = null,
  headers = {}
) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Запит був зроблений і сервер відповів кодом статусу, який виходить за межі 2xx
      console.error('Error response:', error.response.data);
      throw error.response.data;
    } else if (error.request) {
      // Запит був зроблений, але відповіді не отримано
      console.error('Error request:', error.request);
      throw new Error('No response received from server');
    } else {
      // Щось трапилось при налаштуванні запиту
      console.error('Error', error.message);
      throw new Error('Error in setting up request: ' + error.message);
    }
  }
};

export const axiosGet = (url, params = null, headers = {}) =>
  request('get', url, null, params, headers);
export const axiosPost = (url, data, headers = {}) =>
  request('post', url, data, null, headers);
export const axiosPut = (url, data, headers = {}) =>
  request('put', url, data, null, headers);
export const axiosPatch = (url, data, headers = {}) =>
  request('patch', url, data, null, headers);
export const axiosDel = (url, headers = {}) =>
  request('delete', url, null, null, headers);
