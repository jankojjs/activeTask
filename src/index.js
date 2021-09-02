import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { LoginContextProvider } from './store/login-context';

ReactDOM.render(
  <LoginContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginContextProvider>,
  document.getElementById('root')
);