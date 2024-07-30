import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
