import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import appStore from './redux/appStore'
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Router>
      <App />
  </Router>,
  </Provider>
  
)
