import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
