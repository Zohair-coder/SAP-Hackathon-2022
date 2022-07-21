import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from '@ui5/webcomponents-react';
// import RegisterView from './features/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './features/login';
import RegisterView from './features/register';
import HomeView from './features/home';
import ProfileView from './features/profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<LoginView />} />
      <Route path='register' element={<RegisterView />} />
      <Route path = 'home' element = {<HomeView />} />
      <Route path = 'profile' element = {<ProfileView />} />
    </Routes>
  </BrowserRouter>
);
