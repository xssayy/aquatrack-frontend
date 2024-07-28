import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename="/aquatrack-frontend">
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
