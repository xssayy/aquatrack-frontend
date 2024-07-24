import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/aquatrack-frontend">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
