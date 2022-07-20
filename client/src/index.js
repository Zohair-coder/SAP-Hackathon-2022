import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from '@ui5/webcomponents-react';
// import RegisterView from './features/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './features/login';
import RegisterView from './features/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<LoginView />} />
      <Route path='register' element={<RegisterView />} />
    </Routes>
  </BrowserRouter>
);
